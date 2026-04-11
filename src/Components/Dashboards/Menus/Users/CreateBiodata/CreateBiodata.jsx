import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const countries = ["Bangladesh", "India", "USA", "UK", "Canada", "Australia", "Germany", "France"];
const biodataTypes = ["Male", "Female"];
const maritalStatuses = ["Unmarried", "Divorced", "Widowed"];
const religions = ["Islam", "Hindu", "Christianity", "Buddhism", "Other"];
const familyStatuses = ["Lower Middle Class", "Middle Class", "Upper Middle Class", "Rich"];
const familyTypes = ["Nuclear", "Joint"];
const steps = ["Basic Info", "Family Details", "Address Info", "Education", "Partner Preferences"];

const requiredFields = {
    1: ["biodataType", "profileImage", "dateOfBirth", "height", "weight", "maritalStatus", "religion"],
    2: ["fatherName", "motherName", "familyStatus", "familyType"],
    3: ["country", "district", "presentAddress", "permanentAddress"],
    4: ["highestEducation", "aboutMe"],
    5: []
};

const CreateBiodata = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [step, setStep] = useState(1);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        biodataType: "", profileImage: "", dateOfBirth: "", age: "",
        height: "", weight: "", maritalStatus: "", religion: "", profession: "", monthlyIncome: "",
        fatherName: "", motherName: "", fatherProfession: "", motherProfession: "",
        familyStatus: "", familyType: "", country: "", district: "",
        presentAddress: "", permanentAddress: "", highestEducation: "",
        institutionName: "", passingYear: "", aboutMe: "",
        expectedAge: "", expectedHeight: "", expectedEducation: "",
        expectedDistrict: "", expectedProfession: "", partnerPreferences: "",
    });

    // Auto-calculate age from dateOfBirth
    useEffect(() => {
        if (!formData.dateOfBirth) return setFormData(prev => ({ ...prev, age: "" }));
        const birthDate = new Date(formData.dateOfBirth);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) age--;
        setFormData(prev => ({ ...prev, age: age > 0 ? age : "" }));
    }, [formData.dateOfBirth]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const validateStep = () => {
        const fields = requiredFields[step];
        for (let field of fields) {
            if (!formData[field]) {
                setError(`Please fill the ${field} field`);
                return false;
            }
        }
        setError("");
        return true;
    }

    const nextStep = () => {
        if (validateStep()) setStep(prev => Math.min(prev + 1, steps.length));
    }

    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const jumpStep = (i) => {
        if (i < step) setStep(i);
        else if (validateStep()) setStep(i);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateStep()) return;

        const biodataInfo = {
            ...formData,
            name: user?.displayName || "",
            email: user?.email || ""
        };

        try {
            const res = await fetch('http://localhost:5000/api/biodata', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(biodataInfo)
            });
            const data = await res.json();
            console.log(data);
            alert("Biodata submitted successfully!");
            navigate(`/biodata/${data._id}`); // navigate to view profile page
        } catch (err) {
            console.log(err);
            alert("Error submitting biodata.");
        }
    }

    const progress = (step / steps.length) * 100;

    return (
        <section>
            <title>Create Biodata - Matrimony</title>
            <div className="max-w-4xl mx-auto p-4">
                <div className="bg-black rounded-xl shadow p-6">
                    <h2 className="text-2xl font-bold text-center mb-4">Create Biodata</h2>

                    {/* Step Titles */}
                    <div className="flex justify-between mb-6">
                        {steps.map((s, i) => (
                            <div key={i} className="flex-1 cursor-pointer" onClick={() => jumpStep(i + 1)}>
                                <div className={`text-center p-2 border-b-4 ${step === i + 1 ? "border-green-600 font-bold" : "border-gray-300 text-gray-500"}`}>
                                    {s}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 h-2 rounded mb-4">
                        <div className="bg-green-600 h-2 rounded" style={{ width: `${progress}%` }}></div>
                    </div>

                    {error && <p className="text-red-600 mb-4">{error}</p>}

                    <form onSubmit={handleSubmit}>
                        {/* Step 1 */}
                        {step === 1 && (
                            <div className="space-y-4">
                                <select name="biodataType" value={formData.biodataType} onChange={handleChange} className="w-full border p-2 rounded bg-black">
                                    <option value="">Gender</option>
                                    {biodataTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>

                                <div className="flex gap-3">
                                    <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="w-full border p-2 rounded bg-black">
                                        <option value="">Marital Status</option>
                                        {maritalStatuses.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>

                                    <select name="religion" value={formData.religion} onChange={handleChange} className="w-full border p-2 rounded bg-black">
                                        <option value="">Religion</option>
                                        {religions.map(r => <option key={r} value={r}>{r}</option>)}
                                    </select>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full border p-2 rounded bg-black" />
                                    <div className="flex gap-1 items-center">
                                        <input type="number" name="age" value={formData.age} readOnly className="w-20 border p-2 rounded bg-black text-white" />
                                        <span className="text-white">years</span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <input type="text" name="height" value={formData.height} onChange={handleChange} placeholder="Height" className="w-full border p-2 rounded bg-black" />
                                    <input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" className="w-full border p-2 rounded" />
                                </div>

                                <div className="flex gap-3">
                                    <input type="text" name="profession" value={formData.profession} onChange={handleChange} placeholder="Profession" className="w-full border p-2 rounded bg-black" />
                                    <input type="number" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} placeholder="Monthly Income" className="w-full border p-2 rounded bg-black" />
                                </div>

                                <input type="text" name="profileImage" value={formData.profileImage} onChange={handleChange} placeholder="Profile Image URL" className="w-full border p-2 rounded bg-black" />
                            </div>
                        )}

                        {/* Step 2 */}
                        {step === 2 && (
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Father Name" className="w-full border p-2 rounded bg-black" />
                                    <input type="text" name="fatherProfession" value={formData.fatherProfession} onChange={handleChange} placeholder="Father Profession" className="w-full border p-2 rounded bg-black" />
                                </div>

                                <div className="flex gap-3">
                                    <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Mother Name" className="w-full border p-2 rounded" />
                                    <input type="text" name="motherProfession" value={formData.motherProfession} onChange={handleChange} placeholder="Mother Profession" className="w-full border p-2 rounded bg-black" />
                                </div>

                                <select name="familyStatus" value={formData.familyStatus} onChange={handleChange} className="w-full border p-2 rounded bg-black">
                                    <option value="">Family Status</option>
                                    {familyStatuses.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>

                                <select name="familyType" value={formData.familyType} onChange={handleChange} className="w-full border p-2 rounded bg-black">
                                    <option value="">Family Type</option>
                                    {familyTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                            </div>
                        )}

                        {/* Step 3 */}
                        {step === 3 && (
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <select name="country" value={formData.country} onChange={handleChange} className="w-full border p-2 rounded bg-black">
                                        <option value="">Country</option>
                                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                    <input type="text" name="district" value={formData.district} onChange={handleChange} placeholder="District" className="w-full border p-2 rounded bg-black" />
                                </div>
                                <input type="text" name="presentAddress" value={formData.presentAddress} onChange={handleChange} placeholder="Present Address" className="w-full border p-2 rounded bg-black" />
                                <input type="text" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} placeholder="Permanent Address" className="w-full border p-2 rounded bg-black" />
                            </div>
                        )}

                        {/* Step 4 */}
                        {step === 4 && (
                            <div className="space-y-4">
                                <input type="text" name="highestEducation" value={formData.highestEducation} onChange={handleChange} placeholder="Highest Education" className="w-full border p-2 rounded bg-black" />
                                <textarea name="aboutMe" value={formData.aboutMe} onChange={handleChange} rows="4" placeholder="About Me" className="w-full border p-2 rounded bg-black" />
                            </div>
                        )}

                        {/* Step 5 */}
                        {step === 5 && (
                            <div className="space-y-4">
                                <div className="flex gap-3">
                                    <input type="text" name="expectedAge" value={formData.expectedAge} onChange={handleChange} placeholder="Expected Age" className="w-full border p-2 rounded bg-black" />
                                    <input type="text" name="expectedHeight" value={formData.expectedHeight} onChange={handleChange} placeholder="Expected Height" className="w-full border p-2 rounded bg-black" />
                                </div>
                                <div className="flex gap-3">
                                    <input type="text" name="expectedEducation" value={formData.expectedEducation} onChange={handleChange} placeholder="Expected Education" className="w-full border p-2 rounded bg-black" />
                                    <input type="text" name="expectedProfession" value={formData.expectedProfession} onChange={handleChange} placeholder="Expected Profession" className="w-full border p-2 rounded bg-black" />
                                </div>
                                <textarea name="partnerPreferences" value={formData.partnerPreferences} onChange={handleChange} rows="3" placeholder="Partner Preferences" className="w-full border p-2 rounded bg-black" />
                            </div>
                        )}

                        <div className="flex justify-between mt-6">
                            {step > 1 && <button type="button" onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">Previous</button>}
                            {step < steps.length && <button type="button" onClick={nextStep} className="bg-black text-white px-4 py-2 rounded">Next</button>}
                            {step === steps.length && <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded">Submit</button>}
                        </div>

                    </form>
                </div>
            </div>

        </section>
    );
};

export default CreateBiodata;