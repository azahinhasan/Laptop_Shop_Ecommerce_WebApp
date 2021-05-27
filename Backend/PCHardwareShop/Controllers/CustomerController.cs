using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web;
using PCHardwareShop.Models;
using PCHardwareShop.Repository;

namespace PCHardwareShop.Controllers
{

    public class CustomerController : ApiController
    {
        CustomerRepo repo = new CustomerRepo();
        PcHardwareShopEntities2 context = new PcHardwareShopEntities2();

        [Route("api/loadCustomerInfo/{loginTableID}/{email}"), HttpGet]
        public IHttpActionResult AddOrderProduct([FromUri]int loginTableID, [FromUri]string email)
        {
            return Ok(repo.loadCustomerInfo(loginTableID, email));
            //return Ok(email);
        }

        [Route("api/loadCustomerInfo/{id}"), HttpGet]
        public IHttpActionResult UserAndOrderInfo([FromUri]int id)
        {
            return Ok(context.OrderdUserInfoes.Find(id));
            
        }


    }
}