import image from '../../assets/Netart-Test/asserts/3.png'
const Product = () => {
    return (
        <div className='my-12'>
            <h4 className='mb-6 font-serif text-center'>
                INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING 
                IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE 
                NATION.
            </h4>
            <img src={image} alt="" />
            <p className='text-center font-serif border-b-2 border-red-400 mb-6 py-6'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
            <h3 className='text-center font-serif font-semibold mb-4'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
            <p className='font-serif text-center my-6'>
                CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & 
                PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & 
                REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL
            </p>
        </div>
    );
};

export default Product;