using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using PCHardwareShop.Models;

namespace PCHardwareShop.Controllers
{
   // [RoutePrefix("")]
    
    
    public class AllProductsController : ApiController
    {
        PcHardwareShopEntities2 context = new PcHardwareShopEntities2();

        [Route("api/products/latop1"),HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(context.ProductCategoryLinks.Where(x => x.Category.cName == "SSD").ToList());
        }

        [Route("api/products/{category}/{id}"), HttpGet]
        public IHttpActionResult GetInfo([FromUri] string category,[FromUri] int id)
        {
            return Ok(context.ProductCategoryLinks.Where(x => x.ID == id && x.Category.cName == category).ToList());
        }

        [Route("api/products/{category}"), HttpGet]
        public IHttpActionResult productList([FromUri]string category)
        {
            return Ok(context.ProductCategoryLinks.Where(x => x.Category.cName == category).ToList());
            //return Ok(context.ProductCategoryLinks.Where(x => x.Category.cName == "Laptop").ToList());
        }

        [Route("api/products/laptop/{id}")]
        public IHttpActionResult Put([FromBody]ProductCategoryLink data,int id)
        {
            data.ID = id;
            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Ok(context.ProductCategoryLinks.Find(id));
        }

        [Route("api/products/laptop/{id}"),HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var data = context.ProductCategoryLinks.Find(id);
            var dataProduct = context.Products.Find(data.pID);

            context.ProductSpecifications.Remove(context.ProductSpecifications.Find(dataProduct.SpecificationID));
            context.Products.Remove(dataProduct);
            //context.Categories.Remove(context.Categories.Find(data.pCategory));
            context.ProductCategoryLinks.Remove(data);
            context.SaveChanges();
            return Ok("Done");
        }

        [Route("api/products/laptop")]
        public IHttpActionResult Post(ProductCategoryLink data)
        {

            context.ProductCategoryLinks.Add(data);
            context.SaveChanges();
            return Ok("Success");
        }

        [Route("api/orderconfirm"),HttpPost]
        public IHttpActionResult AddOrder([FromBody] OrderdUserInfo info)
        {
            context.OrderdUserInfoes.Add(info);
            context.SaveChanges();
            return Ok(info.ID);
        }

        [Route("api/orderconfirm/productlist"),HttpPost]
        public IHttpActionResult AddOrderProduct([FromBody]AllOrder data)
        {
            context.AllOrders.Add(data);
            context.SaveChanges();
            return Ok("OK");
        }

        [Route("api/promocodeverify/{promoCode}"), HttpGet]
        public IHttpActionResult Get([FromUri]string promoCode)
        {
            var data = context.PromoCodes.Where(x => x.PromoCode1 == promoCode).FirstOrDefault();
            if (data == null)
            {
                //task: will verify the time/date and how many time he can usage
                return Ok("NotValid");
            }
            if (data.UsageLeft<=0)
            {
                return Ok("AlreadyUsed");
            }
            if (data.ExpiryDate<DateTime.Today)
            {
                return Ok("TimeExpired");
            }
            return Ok(data) ;
        }

    }
}