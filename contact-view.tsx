const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    // 👇 Here is your brand new access key!
    formData.append("access_key", "1f991dfe-9405-4346-8529-8d322144e0a6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success! Your message has been sent.");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };