﻿using System;
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
        public IHttpActionResult UserInfo([FromUri] int id)

        {
            var data = context.EmployeeInfoes.Where(e => e.ID == id).FirstOrDefault();
            if (data==null)
            {
                return Ok("NotFound");
            }

            return Ok(data);

        }

        [Route("api/employeeAcess/update/{id}"), HttpPost]
        public IHttpActionResult AccessUpdate([FromUri]int id,[FromBody]EmployeeRank data)
        {


            var employeeRankID = context.EmployeeInfoes.Where(e=>e.ID==id).FirstOrDefault();

            data.ID = (int)employeeRankID.RankTableID;

            context.Entry(data).State = System.Data.Entity.EntityState.Modified;
            context.SaveChanges();

            return Ok("OK");

        }
    }
 }