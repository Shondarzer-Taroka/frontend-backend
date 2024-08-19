// import axios from "axios";
// import { Label, Textarea, TextInput } from "flowbite-react";


// const AddItem = () => {
//     const handleSubmit=(e)=>{
//         e.preventDefault()
//         let title=e.target.title.value 
//         let description=e.target.description.value
//         let id=e.target.id.value
//         console.log(title,description,id);

//         axios.post('http://localhost:6699/cards',{title,description,id})
//         .then(res=>{
//             console.log(res.data);
//             e.target.reset()
//         })
//         .catch(err=>{
//             console.log(err);
//         })
//     }
//     return (
//         <div className="max-w-[400px] mx-auto">
//             <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
//                 <div>
//                     <div className="mb-2 block">
//                         <Label htmlFor="title" value="Your title" />
//                     </div>
//                     <TextInput name="title" id="title" type="text" required />
//                 </div>
//                 <div>
//                     <div className="mb-2 block">
//                         <Label htmlFor="id" value="Your id" />
//                     </div>
//                     <TextInput name="id" id="id" type="text" required />
//                 </div>
//                 <div>
//                     <div className="mb-2 block">
//                         <Label htmlFor="description" value="Description" />
//                     </div>
//                     <Textarea id="description" name="description" placeholder="Write Description" required rows={4} />
//                 </div>
//                 {/* <Button className="bg-slate-950" type="submit">Submit</Button> */}
//                <input type="submit" value={'submit'} name="" id="" className="bg-green-400 text-white rounded-xl px-3 py-2" />
//             </form>
//         </div>
//     );
// };

// export default AddItem;