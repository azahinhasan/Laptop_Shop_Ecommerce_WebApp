using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PCHardwareShop.Models.MetaData;
using System.ComponentModel.DataAnnotations;

namespace PCHardwareShop.Models
{
    [MetadataType(typeof(ProductSpecificationMetaData))]
    public partial class ProductSpecification
    {
    }
}