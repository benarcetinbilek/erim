import "./book.css";
import Navbar from "../../navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../../footer/Footer";
import {
  BaselineAlternateEmail,
  OutlineWatchLater,
  SomeInstagram,
  TwotonePhoneInTalk,
} from "../../icons/icons";
import emailjs from "@emailjs/browser";

const Book = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    date: "",
    // service: "",
    property: "",
    sqft: "",
    often: "",
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const [extras, setExtras] = useState([
    {
      id: 1,
      title: "Deep Cleaning",
      description: "Recommended if last cleaning was 1-2 months ago",
      longDescription:
        "Adds 80$ A thorough cleaning service for homes cleaned recently",
      ifCount: false,
      selected: false,
      src: "/extraIcons/deep-cleaning.svg",
      isImgClose: false,
      price: 80,
    },
    {
      id: 2,
      title: "Double Deep Cleaning",
      description: "Recommended if last cleaning was 3+ months ago",
      longDescription:
        "Adds 160$ Ideal for homes that haven't been cleaned in a long time",
      ifCount: false,
      selected: false,
      src: "/extraIcons/double-deep-cleaning.svg",
      isImgClose: false,
      price: 160,
    },
    // {
    //   id: 3,
    //   title: "Post-Construction",
    //   description: "For homes after renovation",
    //   longDescription:
    //     "Adds 240$ Removes dust, paint residue, and post-build debris",
    //   ifCount: false,
    //   selected: false,
    //   src: "/extraIcons/post-constraction.svg",
    //   isImgClose: false,
    //   price: 240,
    // },
    {
      id: 4,
      title: "Inside the Fridge",
      description: "Interior of the fridge will be cleaned",
      longDescription: "Adds 40$ Deep cleaning of fridge shelves and drawers",
      ifCount: false,
      selected: false,
      src: "/extraIcons/inside-the-fridge.svg",
      isImgClose: false,
      price: 40,
    },
    {
      id: 5,
      title: "Inside the Oven",
      description: "Interior of the oven will be cleaned",
      longDescription: "Adds 40$ Degreasing and deep cleaning of oven surfaces",
      ifCount: false,
      selected: false,
      src: "/extraIcons/inside-the-oven.svg",
      isImgClose: false,
      price: 40,
    },
    {
      id: 6,
      title: "Hand Wipe Baseboards",
      description: "Detailed hand cleaning of baseboards",
      longDescription:
        "Adds 25$ Includes scrubbing and dirt removal from trim areas",
      ifCount: false,
      selected: false,
      src: "/extraIcons/hand-wipe-baseboards.svg",
      isImgClose: false,
      price: 25,
    },
    {
      id: 7,
      title: "Dish Washing",
      description: "Per sinkful",
      longDescription: "Adds 20$ Number of sinkfuls must be specified",
      ifCount: true,
      selected: false,
      count: 1,
      src: "/extraIcons/dish-washing.svg",
      isImgClose: true,
      price: 20,
    },
    {
      id: 8,
      title: "Inside Kitchen Cabinets",
      description: "Interior of cabinets will be cleaned",
      longDescription: "Adds 80$ Crumbs, spills, and stains will be wiped out",
      ifCount: false,
      selected: false,
      src: "/extraIcons/inside-kitchen-cabinets.svg",
      isImgClose: false,
      price: 80,
    },
    {
      id: 9,
      title: "Deep Cleaning of Blinds",
      description: "Detailed blind cleaning",
      longDescription: "Adds 40$ Hand-wiped or vacuumed depending on material",
      ifCount: false,
      selected: false,
      src: "/extraIcons/deep-cleaning-of-blinds.svg",
      isImgClose: false,
      price: 40,
    },
    {
      id: 10,
      title: "Interior Window",
      description: "Interior window glass and frames",
      longDescription:
        "Adds 40$ Cleaning of smudges, dirt, and debris from inside",
      ifCount: true,
      selected: false,
      count: 1,
      src: "/extraIcons/interior-window.svg",
      isImgClose: true,
      price: 40,
    },
    {
      id: 11,
      title: "Exterior Window Cleaning",
      description: "Outside window cleaning",
      longDescription: "Adds 25$ Reachable exterior windows will be cleaned",
      ifCount: true,
      selected: false,
      count: 1,
      src: "/extraIcons/exterior-window-cleaning.svg",
      isImgClose: true,
      price: 25,
    },
    {
      id: 12,
      title: "Sweep Balcony, Patio, or Garage",
      description: "Outdoor floor sweep-up",
      longDescription:
        "Adds 40$ Removes dust, leaves, and debris from outdoor areas",
      ifCount: false,
      selected: false,
      src: "/extraIcons/sweep-balcony.svg",
      isImgClose: false,
      price: 40,
    },
    {
      id: 13,
      title: "Wipe Ceiling Fans",
      description: "Cleaning of fan blades and motor housing",
      longDescription:
        "Adds 10$ Dust will be wiped from all reachable ceiling fans",
      ifCount: false,
      selected: false,
      src: "/extraIcons/wipe-ceiling-fans.svg",
      isImgClose: false,
      price: 10,
    },
    {
      id: 14,
      title: "Wash, Dry, and Fold Laundry",
      description: "Laundry service included",
      longDescription: "Adds 40$ 1 load of laundry washed, dried, and folded",
      ifCount: true,
      selected: false,
      count: 1,
      src: "/extraIcons/laundry.svg",
      isImgClose: true,
      price: 40,
    },
    {
      id: 15,
      title: "Pet Hair Removal",
      description: "Remove pet hair from floors and surfaces",
      longDescription:
        "Adds 60$ Detailed vacuuming and lint removal from furniture",
      ifCount: false,
      selected: false,
      src: "/extraIcons/pet.svg",
      isImgClose: false,
      price: 60,
    },
    {
      id: 16,
      title: "Green/Eco Friendly Products",
      description: "Non-toxic, eco-safe cleaning supplies",
      longDescription: "All cleaning will be performed with eco products",
      ifCount: false,
      selected: false,
      src: "/extraIcons/eco-friendly.svg",
      isImgClose: false,
      price: 0,
    },
  ]);

  const [errors, setErrors] = useState({});

  const toggleExtra = (id) => {
    setExtras((prev) =>
      prev.map((extra) =>
        extra.id === id ? { ...extra, selected: !extra.selected } : extra
      )
    );
  };

  const updateCount = (id, value) => {
    setExtras((prev) =>
      prev.map((extra) =>
        extra.id === id ? { ...extra, count: value } : extra
      )
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));

    // Hata varsa kaldır
    if (errors[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.phone)
      newErrors.phone = "This field is required. Please input a phone number.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "This field is required. Please input a valid email.";
    if (!form.address)
      newErrors.address =
        "This field is required. Please enter the street address.";
    if (!form.date) newErrors.date = "This field is required.";
    // if (!form.service)
    //   newErrors.service = "This field is required. Please select a service.";
    if (!form.property)
      newErrors.property =
        "This field is required. Please select a property type.";
    if (!form.sqft)
      newErrors.sqft =
        "This field is required. Please enter the square footage.";
    if (!form.often)
      newErrors.often = "This field is required. Please select how often.";

    setErrors(newErrors);

    const selectedExtras = extras
      .filter((extra) => extra.selected)
      .map((extra) => {
        const base = `${extra.title} - $${extra.price}`;
        if (extra.ifCount) {
          return `${base} x ${extra.count} = $${extra.price * extra.count}`;
        }
        return base;
      })
      .join(", ");

    const templateParams = {
      name: form.name,
      // reply_to: form.email,
      phone: form.phone,
      email: form.email,
      address: form.address,
      date: form.date,
      // service: form.service,
      property: form.property,
      sqft: form.sqft,
      often: form.often,
      price: `$${totalPrice}`,
      extras:
        extras
          .filter((extra) => extra.selected)
          .map((extra) => {
            const base = `${extra.title} - $${extra.price}`;
            if (extra.ifCount) {
              return `${base} x ${extra.count} = $${extra.price * extra.count}`;
            }
            return base;
          })
          .join(", ") || "None",
    };

    // console.log("Submittedbefore!", templateParams);
    // console.log("errrrors", newErrors);
    if (Object.keys(newErrors).length === 0) {
      // console.log("Submitted!", templateParams);
      emailjs
        .send(
          "service_0tx5cke",
          "template_6mrpq8s",
          templateParams,
          "rwR-niic-rxN5XhFi"
        )
        .then((result) => {
          console.log("✅ Email sent:", result);
          alert("Thank you! Your booking was submitted.");
          // Formu temizle
          setForm({
            name: "",
            phone: "",
            email: "",
            address: "",
            date: "",
            service: "",
            property: "",
            sqft: "",
            often: "",
          });
        })
        .catch((error) => {
          console.error("❌ Failed to send email:", error);
          alert("Oops! Something went wrong. Please try again.");
        });
    }
  };

  useEffect(() => {
    let price = 0;

    // 1. Property base price
    const propertyMap = {
      "1 bed 1 bath": 150,
      "2 beds 1 bath": 175,
      "2 beds 2 bath": 200,
      "3 beds 2 bath": 225,
      "3 beds 3 bath": 250,
      "4 beds 2 bath": 250,
    };

    if (form.property && propertyMap[form.property]) {
      price += propertyMap[form.property];
    }

    // 2. Square Footage
    // const sqft = parseInt(form.sqft, 10);
    // if (!isNaN(sqft) && sqft > 50) {
    //   const extraSqft = sqft - 50;
    //   const stepsOf100 = Math.ceil(extraSqft / 100);
    //   price += stepsOf100 * 50;
    // }

    // 3. Extras
    const selectedExtras = extras.filter((extra) => extra.selected);
    const extrasPrice = selectedExtras.reduce((acc, extra) => {
      return acc + (extra.ifCount ? extra.count * extra.price : extra.price);
    }, 0);
    price += extrasPrice;

    // 4. Frequency Discount
    switch (form.often) {
      case "Once every week":
        price *= 1; // 15% indirim
        break;
      case "Once every 2 weeks":
        price *= 1;
        break;
      case "Once every 3 weeks":
      case "Once every 4 weeks":
        price *= 1;
        break;
      case "one Time":
        price += 25;
        break;
      default:
        break; // one time ise değişiklik yok
    }

    setTotalPrice(Math.round(price));
  }, [form, extras]);

  return (
    <div className="bookContainer">
      <Navbar />
      <div className="bookPicContainer">
        <img src="a.png" alt="banner" />
        <h1 className="bookPicText">Let's Talk</h1>
      </div>
      <div className="bookFormContainer">
        <div className="formWrapper">
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Please Fill Out This Form
          </h1>
          <form className="bookForm" onSubmit={handleSubmit} noValidate>
            <label>Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <div className="two-col">
              <div>
                <label>Phone Number *</label>
                <input
                  type="number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div>
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>

            <label>Street Address *</label>
            <input
              type="text"
              name="address"
              placeholder="E.g. 42 Wallaby Way"
              value={form.address}
              onChange={handleChange}
            />
            {errors.address && <span className="error">{errors.address}</span>}

            {/* <label>Type of service *</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="bookSelect"
            >
              <option value="">-- Select Service --</option>
              <option value="residential">Residential Cleaning</option>
              <option value="commercial">Commercial Cleaning</option>
            </select>
            {errors.service && <span className="error">{errors.service}</span>} */}

            <div className="two-col">
              <div>
                <label>Describe your property</label>
                <select
                  name="property"
                  value={form.property}
                  onChange={handleChange}
                  className="bookSelect"
                >
                  <option value="">-- Select Property Type --</option>
                  <option value="1 bed 1 bath">1 bed 1 bath</option>
                  <option value="2 beds 1 bath">2 beds 1 bath</option>
                  <option value="2 beds 2 bath">2 beds 2 bath</option>
                  <option value="3 beds 2 bath">3 beds 2 bath</option>
                  <option value="3 beds 3 bath">3 beds 3 bath</option>
                  <option value="4 beds 2 bath">4 beds 2 bath</option>
                </select>
                {errors.property && (
                  <span className="error">{errors.property}</span>
                )}
              </div>
              <div>
                <label>Sq FT</label>
                <input
                  type="number"
                  name="sqft"
                  value={form.sqft}
                  onChange={handleChange}
                />
                {errors.sqft && <span className="error">{errors.sqft}</span>}
              </div>
            </div>

            <label>How often?</label>
            <select
              name="often"
              value={form.often}
              onChange={handleChange}
              className="bookSelect"
            >
              <option value="">-- Select Time --</option>
              <option value="one Time">One time </option>
              <option value="Once every week">Every week</option>
              <option value="Once every 2 weeks">Every 2 weeks</option>
              {/* <option value="Once every 3 weeks">Every 3 weeks</option> */}
              <option value="Once every 4 weeks">Once a month</option>
            </select>

            {errors.often && <span className="error">{errors.often}</span>}

            <label>Choose a Cleaning Date *</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
            />
            {errors.date && <span className="error">{errors.date}</span>}

            <div className="extrasGrid">
              {extras.map((extra) => (
                <div
                  key={extra.id}
                  className={`extraItem ${extra.selected ? "selected" : ""}`}
                  onClick={() => toggleExtra(extra.id)}
                >
                  {extra.ifCount && extra.selected && extra.isImgClose ? (
                    <input
                      type="number"
                      value={extra.count}
                      min="1"
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) =>
                        updateCount(extra.id, parseInt(e.target.value) || 1)
                      }
                      className="countInput"
                    />
                  ) : (
                    <img
                      src={extra.src}
                      alt={extra.title}
                      className="extraIcon"
                    />
                  )}

                  <h4>{extra.title}</h4>
                  {/* <p className="shortDesc">{extra.description}</p> */}

                  {/* Tooltip kutusu */}
                  <div className="tooltipBox">{extra.longDescription}</div>
                </div>
              ))}
            </div>

            <button type="submit" className="sendBtn">
              Send Message
            </button>
          </form>
        </div>

        <div className="bookContactInfo">
          <h1>Get A Free Estimate</h1>
          <div className="infoItem">
            <span className="icon">
              <TwotonePhoneInTalk />
            </span>
            <div>
              <strong>Contact Number</strong>
              <p>+1 855 551 5445</p>
            </div>
          </div>

          <div className="infoItem">
            <span className="icon">
              <OutlineWatchLater />
            </span>
            <div>
              <strong>Working Hours</strong>
              <p>Mon - Sun: 7:00 AM - 7:00 PM</p>
            </div>
          </div>

          <div className="infoItem">
            <span className="icon">
              <BaselineAlternateEmail />
            </span>
            <div>
              <strong>Service Areas</strong>
              <p>Orange County</p>
              <p>Ventura County</p>
              <p>Los Angeles County</p>
              <p>South Bay</p>
            </div>
          </div>

          {/* <div className="infoItem">
            <span className="icon">
              <SomeInstagram />
            </span>
            <div>
              <strong>Follow Our Instagram</strong>
            </div>
          </div> */}
          <div className="priceContainer">
            <div className="priceWrapper">Total: {totalPrice}$</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;

//porperty selection change and dynamic price calculation
