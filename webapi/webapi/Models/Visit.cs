namespace webapi.Models
{
    public class Visit
    {
        public int VisitId { get; set; }
        public int PatientId { get; set; }
        public Patient Patient { get; set; }

        public int HospitalId { get; set; }
        public Hospital Hospital { get; set; }
        public DateTime VisitDate { get; set; }
        
    }
}
