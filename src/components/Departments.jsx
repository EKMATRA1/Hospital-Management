import "../styles/Departments.css";

const departments = [

{
icon:"fa-solid fa-heart-pulse",
title:"Cardiology",
desc:"Expert treatment for heart diseases with modern technology."
},

{
icon:"fa-solid fa-brain",
title:"Neurology",
desc:"Advanced diagnosis and treatment for brain disorders."
},

{
icon:"fa-solid fa-bone",
title:"Orthopedics",
desc:"Complete care for bones, joints and spine problems."
},

{
icon:"fa-solid fa-child",
title:"Pediatrics",
desc:"Special healthcare services for infants and children."
},

{
icon:"fa-solid fa-eye",
title:"Ophthalmology",
desc:"Comprehensive eye care and vision correction services."
},

{
icon:"fa-solid fa-tooth",
title:"Dental Care",
desc:"Modern dental treatments with experienced specialists."
},

{
icon:"fa-solid fa-lungs",
title:"Pulmonology",
desc:"Expert care for lung and respiratory diseases."
},

{
icon:"fa-solid fa-ear-listen",
title:"ENT",
desc:"Complete Ear, Nose and Throat treatment."
},

{
icon:"fa-solid fa-user-doctor",
title:"General Medicine",
desc:"Experienced physicians for complete health checkups."
},

{
icon:"fa-solid fa-stethoscope",
title:"General Surgery",
desc:"Safe and advanced surgical procedures."
},

{
icon:"fa-solid fa-x-ray",
title:"Radiology",
desc:"Digital X-Ray, CT Scan and MRI facilities."
},

{
icon:"fa-solid fa-flask",
title:"Pathology",
desc:"Accurate laboratory testing and diagnosis."
},

{
icon:"fa-solid fa-kit-medical",
title:"Emergency",
desc:"24×7 emergency and trauma care services."
},

{
icon:"fa-solid fa-bed-pulse",
title:"ICU",
desc:"Critical care with advanced monitoring systems."
},

{
icon:"fa-solid fa-notes-medical",
title:"Physiotherapy",
desc:"Physical rehabilitation with expert therapists."
},

{
icon:"fa-solid fa-user-nurse",
title:"Nursing Care",
desc:"Professional nursing support for every patient."
}

];

function Departments(){
return(
<>

<section className="department-banner">
<div className="department-banner-content">
<h1>Our Departments</h1>
</div>

</section>
<section className="department-section">
<div className="department-grid">
{departments.map((item,index)=>(
<div className="department-card" key={index}>
<div className="department-icon">
<i className={item.icon}></i>
</div>
<h3>{item.title}</h3>
<p>{item.desc}</p>
</div>
))}
</div>
</section>
</>
);
}

export default Departments;