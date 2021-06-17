using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using System.Xml.Serialization;

namespace PCHardwareShop.Models.MetaData
{
    public class EmployeeRankMetaData
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public EmployeeRankMetaData()
        {
            this.EmployeeInfoes = new HashSet<EmployeeInfo>();
        }

        public int ID { get; set; }
        public string Rank { get; set; }
        public string Employee { get; set; }
        public string Products { get; set; }
        public string Orders { get; set; }
        public string Others { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]

        [JsonIgnore, XmlIgnore]
        public virtual ICollection<EmployeeInfo> EmployeeInfoes { get; set; }
    }
}