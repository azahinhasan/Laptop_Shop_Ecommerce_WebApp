using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web;
using PCHardwareShop.Models;
using PCHardwareShop.Attributes;
using System.Net;
using System.Web;
using System.Threading;
using System.IO;


namespace PCHardwareShop.Controllers
{
    public class EmployeeController : ApiController
    {
        PcHardwareShopEntities4 context = new PcHardwareShopEntities4();

        [Route("api/employeeInfo/{id}"), HttpGet, AdminAuth]
        public IHttpActionResult UserInfo([FromUri] int id)
        {
            var data = context.EmployeeInfoes.Where(e => e.ID == id).FirstOrDefault();
            if (data==null)
            {
                return Ok("NotFound");
            }
            return Ok(data);
        }

        [Route("api/loginInfo/{id}"), HttpGet,AdminAuth]
        public IHttpActionResult UserLoginInfo([FromUri]int id)
        {
            var data = context.UserLoginTables.Where(e => e.ID == id).FirstOrDefault();
            if (data == null)
            {
                return Ok("NotFound");
            }
            return Ok(data.Password);
        }



        [Route("api/employeeAcess/update/{id}"), HttpPost, AdminAuth]
        public IHttpActionResult AccessUpdate([FromUri]int id,[FromBody]EmployeeRank data)
        {
            var employeeRankID = context.EmployeeInfoes.Where(e=>e.ID==id).FirstOrDefault();

            data.ID = (int)employeeRankID.RankTableID;
            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();

            return Ok("OK");
        }

        [Route("api/employeeAcessCheck/{actionAccess}/{email}"), HttpGet]
        public IHttpActionResult AccessCheck([FromUri] string actionAccess, [FromUri] string email)
        {

            var data = context.EmployeeInfoes.Where(e =>  e.Email==email).FirstOrDefault();
            var accessData = context.EmployeeRanks.Find(data.RankTableID);

            if(accessData.Employee=="true" && actionAccess == "Employee")
            {
                return Ok("Valid");
            }
            if (accessData.Others == "true" && actionAccess == "Others")
            {
                return Ok("Valid");
            }
            if (accessData.Products == "true" && actionAccess == "Products")
            {
                return Ok("Valid");
            }
            if (accessData.Orders == "true" && actionAccess == "Orders")
            {
                return Ok("Valid");
            }

            return Ok("NotValid");
        }

        [Route("api/addEmployee/{Rank}"), HttpPost, AdminAuth]
        public IHttpActionResult AddEmployee([FromUri]string Rank, [FromBody]EmployeeInfo data)
        {
            Random r = new Random();
            int pass = r.Next();

            UserLoginTable LoginData = new UserLoginTable();
            EmployeeRank RankData = new EmployeeRank();

            var emailCheck = context.UserLoginTables.Where(d => d.Email == data.Email).FirstOrDefault();
            if(emailCheck != null)
            {
                return Ok("Email Already Taken!");
            }

            if (data.Email=="" || data.Name== "" || data.Phone == "")
            {
                return Ok("Please Fill Up All InputBox!");
            }

            LoginData.Email = data.Email;
            LoginData.Password = pass.ToString();
            LoginData.Type = "Employee";
            context.UserLoginTables.Add(LoginData);
            context.SaveChanges();

            RankData.Rank = Rank;
            if (Rank=="admin")
            {
                RankData.Employee = "true";
                RankData.Others = "true";
                RankData.Orders = "true";
                RankData.Products = "true";
            }
            if (Rank == "moderator")
            {
                RankData.Employee = "false";
                RankData.Others = "true";
                RankData.Orders = "false";
                RankData.Products = "true";
            }
            if (Rank == "deliveryIncharge")
            {
                RankData.Employee = "false";
                RankData.Others = "false";
                RankData.Orders = "true";
                RankData.Products = "false";
            }

            context.EmployeeRanks.Add(RankData);
            context.SaveChanges();


            data.RankTableID = RankData.ID;
            data.LoginTableID = LoginData.ID;
            context.EmployeeInfoes.Add(data);
            context.SaveChanges();

            return Ok(data.ID);
        }
    }
 }