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
        PcHardwareShopEntities4 context = new PcHardwareShopEntities4();

        [Route(""), HttpGet]
        public IHttpActionResult Geat()
        {
            return Ok("Running.....");
        }

        [Route("api/products/latop1"), HttpGet]
        public IHttpActionResult Get()
        {

            return Ok(context.ProductCategoryLinks.Where(x => x.Category.cName == "SSD").ToList());
        }

        [Route("api/products/{category}/{id}"), HttpGet]
        public IHttpActionResult GetInfo([FromUri] string category, [FromUri] int id)
        {
            return Ok(context.ProductCategoryLinks.Where(x => x.ID == id && x.Category.cName == category).ToList());
        }

        
        [Route("api/productslist/{category}/{pageNumber}"), HttpGet]
        public IHttpActionResult productList([FromUri]string category,[FromUri] int pageNumber)
        {
            var data = context.ProductCategoryLinks.Where(x => x.Category.cName == category).OrderBy(x => x.Product.pName).Skip(pageNumber*4).Take(4).ToList();
            //var data = context.ProductCategoryLinks.Where(x => x.Category.cName == category).ToList();
            //have to call orderBy before Skip

            return Ok(data);
            //return Ok(context.ProductCategoryLinks.Where(x => x.Category.cName == "Laptop").ToList());
        }

        [Route("api/pagenumber/{category}"), HttpPost]
        public IHttpActionResult pageNumber([FromUri] string category)
        {
           var data = context.ProductCategoryLinks.Where(x => x.Category.cName == category);

            var pageNum = data.Count() / 4;
            if (data.Count()-(pageNum*4)>0)
            {
                pageNum = pageNum + 1;
            }
            return Ok(pageNum);
        }

        [Route("api/products/laptop/{id}")]
        public IHttpActionResult Put([FromBody] ProductCategoryLink data, int id)
        {
            data.ID = id;
            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Ok(context.ProductCategoryLinks.Find(id));
        }

        [Route("api/products/laptop/{id}"), HttpDelete]
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

       


        [Route("api/promocodeverify/{promoCode}/{type}"), HttpGet]
        public IHttpActionResult Get([FromUri] string promoCode,[FromUri]int type)
        {
            var data = context.PromoCodes.Where(x => x.PromoCode1 == promoCode).FirstOrDefault();
            if (type == 0)
            {
                if (data == null)
                {
                    //task: 
                    return Ok("NotValid");
                }
                if (data.UsageLeft <= 0)
                {
                    return Ok("AlreadyUsed");
                }
                if (data.ExpiryDate < DateTime.Today)
                {
                    return Ok("TimeExpired");
                }
            }
            if (type == 1)
            {
                data.UsageLeft = data.UsageLeft - 1;
                context.Entry(data).State = System.Data.Entity.EntityState.Modified;
                context.SaveChanges();

            }

            return Ok(data.OfferInPercentage);
        }

        [Route("api/pormolist"), HttpGet]
        public IHttpActionResult GetPromocodeList()
        {
            return Ok(context.PromoCodes.ToList());

        }

        [Route("api/pormolist/{id}"), HttpGet]
        public IHttpActionResult LoadPromocode([FromUri]int id)
        {
            return Ok(context.PromoCodes.Find(id));

        }

        [Route("api/pormolist/{id}"), HttpPut]
        public IHttpActionResult EditPromocode([FromUri] int id,[FromBody]PromoCode data)
        {
            data.ID = id;
            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Ok("OK");

        }

        [Route("api/pormolist/"), HttpPost]
        public IHttpActionResult AddPromocode([FromBody] PromoCode data)
        {
            var test = context.PromoCodes.Where(x => x.PromoCode1 == data.PromoCode1).FirstOrDefault();

            if (test!= null)
            {
                return Ok("PROMO ALREADY EXiST");
            }
            context.PromoCodes.Add(data);
            context.SaveChanges();

            return Ok("PRODUCT ADDED");

        }

        [Route("api/pormolist/{id}"), HttpDelete]
        public IHttpActionResult DeleteProducts([FromUri]int id)
        {
            context.PromoCodes.Remove(context.PromoCodes.Find(id));
            context.SaveChanges();
            return Ok("OK");

        }


        [Route("api/products"), HttpPost]
        public IHttpActionResult AddProducts([FromBody]Product data)
        {

            if (data.pName==null && Int32.Parse(data.Price) > 0 && data.MainPic==null)
            {
                return Ok("Please Fill-Up all textbox,Upload Main Pic and Price bigger then 0");
            }
            context.Products.Add(data);
            context.SaveChanges();
            return Ok(data.ID);

        }

      

        [Route("api/products/spacification"), HttpPost]
        public IHttpActionResult AddProductsSpacification([FromBody]ProductSpecification data)
        {
            context.ProductSpecifications.Add(data);
            context.SaveChanges();
            return Ok(data.SpecificationID);
        }
        [Route("api/productsConnectWithBrand"), HttpPost]
        public IHttpActionResult AddProductsConnectWithBrand([FromBody]ProductCategoryLink data)
        {
            context.ProductCategoryLinks.Add(data);
            context.SaveChanges();
            return Ok(data.ID);
        }

        [Route("api/products/load/{search}"), HttpGet]
        public IHttpActionResult LoadProductInfoForEdit([FromUri]String search)
        {
            int serachToInt = Int32.Parse(search);
            var data = context.Products.Where(x=>x.ID == serachToInt).FirstOrDefault();
            
            if (data == null)
            {
                data = context.Products.Where(x => x.pName == search).FirstOrDefault();
                if (data == null)
                {
                    return Ok("Data Not Found");
                }
            }

            return Ok(context.ProductCategoryLinks.Where(x => x.pID == data.ID).FirstOrDefault());
        }

/*        [Route("api/products/{id}"), HttpPut]
        public IHttpActionResult EditProductInfo([FromBody]ProductCategoryLink data,[FromUri]int id)
        {

            //data.pID = id;
            //  data.Product.Price = "83";
            data.ID = id;
            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Ok(context.Products.Find(data.pID));
           // return Ok(data.Price);
        }*/


        [Route("api/products/spacification/{id}"), HttpPut]
        public IHttpActionResult EditProductsSpacification([FromBody] ProductSpecification data, [FromUri] int id)
        {
            data.SpecificationID = id;
            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Ok(data.SpecificationID);
        }
        [Route("api/products/{id}"), HttpPut]
        public IHttpActionResult EditProducts([FromBody]Product data, [FromUri]int id)
        {
            data.ID = id;
            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();
            return Ok(data.SpecificationID);

        }
        [Route("api/search/{data}"), HttpGet]
        public IHttpActionResult EditProductsConnectWithBrand([FromUri]string data)
        {

           // return Ok(context.Products.Where(x=>x.pName.Contains(data)));
            return Ok(context.ProductCategoryLinks.Where(x => x.Product.pName.Contains(data) || x.Category.cName.Contains(data) || x.Product.ProductSpecification.Colors.Contains(data)).ToList());
        }



    }
}