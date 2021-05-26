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
    public class SignInSignUpController : ApiController
    {
        //PcHardwareShopEntities2 context = new PcHardwareShopEntities2();
        LoginSignUpRebo repo = new LoginSignUpRebo();

        [Route("api/login"), HttpPost]
        public IHttpActionResult login([FromBody]UserLoginTable value)
        {
            return Ok(repo.loginRepo(value));
        }

        [Route("api/signup"), HttpPost]
        public IHttpActionResult signUpForLogin([FromBody] UserLoginTable data)
        {
            return Ok(repo.signUpForLoginRepo(data));
        }


        [Route("api/signup/customer"), HttpPost]
        public IHttpActionResult signupCustomer([FromBody]CustomerInfo data)
        {
           return Ok(repo.signupCustomerRepo(data));
        }

     
    }
}