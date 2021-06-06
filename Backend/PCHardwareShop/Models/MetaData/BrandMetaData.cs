using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml.Serialization;

namespace PCHardwareShop.Models.MetaData
{
    public class BrandMetaData
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public BrandMetaData()
        {
            this.Products = new HashSet<Product>();
        }

        public int ID { get; set; }
        public string bName { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
   
        public virtual ICollection<Product> Products { get; set; }
    }
}