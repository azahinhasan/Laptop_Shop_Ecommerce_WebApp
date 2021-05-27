using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PCHardwareShop.Models;

namespace PCHardwareShop.Repository
{
    public class CustomerRepo
    {
        PcHardwareShopEntities2 context = new PcHardwareShopEntities2();
        public CustomerInfo loadCustomerInfo(int loginTableID,string email)
        {

            var data = context.CustomerInfoes.Where(x => x.Email == email && x.LoginTableID == loginTableID).ToList();

            return data[0];
        }


    }
}