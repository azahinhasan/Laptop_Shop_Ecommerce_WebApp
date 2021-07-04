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
        public IHttpActionResult UserAndOrderInfo([FromUri] int id)

        {

            return Ok(context.EmployeeInfoes.Find(id));

        }
    }
 }