using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web;
using PCHardwareShop.Models;

namespace PCHardwareShop.Controllers
{

    public class CustomerController : ApiController
    {
        PcHardwareShopEntities2 context = new PcHardwareShopEntities2();


        [Route("api/login"), HttpPost]
        public IHttpActionResult login([FromBody]UserLoginTable value)
        {


            var data = context.UserLoginTables.Where(x => x.Email == value.Email && x.Password==value.Password).FirstOrDefault();
         
            if (data==null)
            {
                return Ok("InValid");
            }

            string[] temp = {data.ID.ToString(),data.Type,data.Email};

            return Ok(temp);
        }

    }
}