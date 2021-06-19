using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PCHardwareShop.Models;
using PCHardwareShop.Repository;
using System.Web.Http;

namespace PCHardwareShop.Controllers
{
   
    public class OrdersController : ApiController
    {
        PcHardwareShopEntities4 context = new PcHardwareShopEntities4();

        public int  createStatusTable(int orderId)
        {
            StatusTable data = new StatusTable();
            data.OrderId = orderId;
            data.Status = "none";
            data.FailedReason = "";
            context.StatusTables.Add(data);
            context.SaveChanges();
            return data.ID;
        }

        [Route("api/orderconfirm"), HttpPost]
        public IHttpActionResult AddOrder([FromBody] OrderdUserInfo info)
        {
            
            context.OrderdUserInfoes.Add(info);
            context.SaveChanges();
            createStatusTable(info.ID);
            return Ok(info.ID);
        }

        [Route("api/orderconfirm/productlist"), HttpPost]
        public IHttpActionResult AddOrderProduct([FromBody] AllOrder data)
        {
            context.AllOrders.Add(data);
            context.SaveChanges();
            return Ok("OK");
        }

        [Route("api/orders"), HttpGet]
        public IHttpActionResult AllOrder()
        {

            return Ok(context.OrderdUserInfoes.ToList());
        }
        [Route("api/orders/{id}"), HttpGet]
        public IHttpActionResult AllOrderByID([FromUri] int id)
        {
            return Ok(context.OrderdUserInfoes.Find(id));
        }

        [Route("api/changeStatus/{id}/{status1}"), HttpPost]
        public IHttpActionResult ChangeStatus([FromUri] int id, [FromUri] string status1)
        {
            var data = context.StatusTables.Where(x => x.OrderId == id).FirstOrDefault();
/*
            if (status1 == "none")
            {
                data.Status = "none";
            }
            if (status1 == "inprogress")
            {
                data.Status = "inprogress";
            }
            if (status1 == "failed")
            {
                data.Status = "failed";

            }
            if (status1 == "done")
            {
                data.Status = "done";
            }
            if (status1 == "done")
            {
                data.Status = "done";
            }*/
            data.Status = status1;

            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Ok(data.Status);

        }

        [Route("api/editcomment/{id}"), HttpPut]
        public IHttpActionResult EditCommnet([FromUri] int id, [FromBody] StatusTable value)
        {

            var data = context.StatusTables.Where(x => x.OrderId == id).FirstOrDefault();
            data.FailedReason = value.FailedReason;
            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Ok(data.FailedReason);

        }


        [Route("api/userOrders/{email}"), HttpGet] //order of spacific user
        public IHttpActionResult OrderListOfSpacifiuser([FromUri]string email)
        {

            return Ok(context.OrderdUserInfoes.Where(x=>x.Email == "a").ToList());
           

        }
    }
}