using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml.Serialization;

namespace PCHardwareShop.Models.MetaData
{
    public class CategoryMetaData
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CategoryMetaData()
        {
            this.ProductCategoryLinks = new HashSet<ProductCategoryLink>();
        }

        public int ID { get; set; }
        public string cName { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        [JsonIgnore, XmlIgnore]
        public virtual ICollection<ProductCategoryLink> ProductCategoryLinks { get; set; }
    }
}