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

        [Route("api/products/laptop"),HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(context.ProductCategoryLinks.Where(x => x.Category.cName == "Laptop").ToList());
        }

        [Route("api/products/laptop/{id}")]
        public IHttpActionResult Put([FromBody]ProductCategoryLink data,int id)
        {
            data.ID = id;
            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Ok(data);
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
    }
}