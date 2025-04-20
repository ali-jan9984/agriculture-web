export async function POST() {
    // Parse the request body
    const body = await request.json();
    const { name, phone, message} = body;
    
    if(!name || !phone || !message) {
        return { status: 400
            , message: "Please fill in all fields."
        }
    }
    // the phone number should be 11 digits and no other characters
    if (phone.length !== 11 || !phone.match(/^[0-9]{11}$/)){
        return {
            status:400,
            message: "Phone number should be 11 digits and no other characters."
        }
    }
  }