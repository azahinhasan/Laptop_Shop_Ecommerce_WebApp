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
            string tokken = "0";

            if (data == null)
            {
                string[] temp1 = {"InValid"};

                return temp1;
            }
/*
            if (data.Type== "Employee")
            {
               tokken=tockenCheck(data.Email);
            }*/
            tokken = tockenCheck(data.Email);

            string[] temp = { data.ID.ToString(), data.Type, data.Email, tokken };

            return temp;
        }


        public string tockenCheck(string value)
        {
            TokenTable temp = new TokenTable();
            var data = context.TokenTables.Where(x => x.Email == value).FirstOrDefault();
            Random r = new Random();
            int rendom = r.Next();

            if (data != null)
            {
                context.TokenTables.Remove(context.TokenTables.Find(data.ID));
                context.SaveChanges();

            }
            temp.Email = value;
            temp.Token = rendom.ToString();
            context.TokenTables.Add(temp);
            context.SaveChanges();

            return temp.Token;
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

        public string logOutRepo(TokenTable value)
        {
            var data = context.TokenTables.Where(x => x.Email == value.Email && x.Token == value.Token).FirstOrDefault();

            if(data == null)
            {
                data = context.TokenTables.Where(x => x.Email == value.Email).FirstOrDefault();
            }

            context.TokenTables.Remove(context.TokenTables.Find(data.ID));
            context.SaveChanges();

            return "OK";
        }
        public string checkLoginRepo(TokenTable value)
        {
            var data = context.TokenTables.Where(x => x.Email == value.Email && x.Token == value.Token).FirstOrDefault();


            if (data == null)
            {
                return "InValid";
            }


            return "OK";
        }

        public string updatePass(string oldPass,string newPass, string email)
        {
            var data = context.UserLoginTables.Where(x => x.Email == email && x.Password == oldPass).FirstOrDefault();

            if (data == null)
            {
                return "Wrong Old Password!";
            }

            data.Password = newPass;
            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();

            return "Password Updated!";
        }

    }
}