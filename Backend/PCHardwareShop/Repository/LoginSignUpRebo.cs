using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PCHardwareShop.Models;

namespace PCHardwareShop.Repository
{
    
    public class LoginSignUpRebo
    {
        PcHardwareShopEntities4 context = new PcHardwareShopEntities4();


        public string[] loginRepo(UserLoginTable value)
        {

            var data = context.UserLoginTables.Where(x => x.Email == value.Email && x.Password == value.Password).FirstOrDefault();
            

            if (data == null)
            {
                string[] temp1 = {"InValid"};

                return temp1;
            }

            string[] temp = { data.ID.ToString(), data.Type, data.Email };

            return temp;
        }

        public int signUpForLoginRepo(UserLoginTable data)
        {
            var temp = context.UserLoginTables.Where(x => x.Email == data.Email).FirstOrDefault();
            if (temp!=null)
            {
                return 0; //0 mean email already exist
            }
            context.UserLoginTables.Add(data);
            context.SaveChanges();
            return data.ID;

        }

        public string signupCustomerRepo(CustomerInfo data)
        {

            context.CustomerInfoes.Add(data);
            context.SaveChanges();
            return "OK";
        }


    }
}