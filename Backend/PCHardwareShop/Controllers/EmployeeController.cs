using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web;
using PCHardwareShop.Models;

namespace PCHardwareShop.Controllers
{
    public class EmployeeController : ApiController
    {
        PcHardwareShopEntities4 context = new PcHardwareShopEntities4();

        [Route("api/employeeAcess/{id}"), HttpGet]
        public IHttpActionResult UserInfo([FromUri] int id)
        {
            var data = context.EmployeeInfoes.Where(e => e.ID == id).FirstOrDefault();
            if (data==null)
            {
                return Ok("NotFound");
            }
            return Ok(data);
        }

        [Route("api/employeeAcess/update/{id}"), HttpPost]
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
    }
 }