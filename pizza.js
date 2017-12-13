$(document).ready(function ()
{
    // hide these sections on page load

    $(".size").hide();
    $(".crust").hide();
    $(".cheese").hide();
    $(".sauce").hide();
    $(".meats").hide();
    $(".veggies").hide();
    $(".receipt").hide();

    // when the headers are clicked slide toggle the menus under them
    // and toggle between rotate classes to give down arrow appearance of flipping
    
    $(".sizeHead").click(function ()
    {
        $(".size").slideToggle("slow");
        $(".size-icon-rotate").toggleClass("size-rotate");
    });

    $(".crustHead").click(function ()
    {
        $(".crust").slideToggle("slow");
        $(".crust-icon-rotate").toggleClass("crust-rotate");
    });

    $(".cheeseHead").click(function ()
    {
        $(".cheese").slideToggle("slow");
        $(".cheese-icon-rotate").toggleClass("cheese-rotate");
    });

    $(".sauceHead").click(function ()
    {
        $(".sauce").slideToggle("slow");
        $(".sauce-icon-rotate").toggleClass("sauce-rotate");
    });

    $(".meatsHead").click(function ()
    {
        $(".meats").slideToggle("slow");
        $(".meats-icon-rotate").toggleClass("meats-rotate");
    });

    $(".veggiesHead").click(function ()
    {
        $(".veggies").slideToggle("slow");
        $(".veggies-icon-rotate").toggleClass("veggies-rotate");
    });

    //total price initialized @ 0

    var price = 0;

    //calculate the price of each item on the order

    function getSize() {
        var sizeType;
        var sizes = document.getElementsByName("size");
        var sizeCost = 0;

        for (var i = 0; i < sizes.length; i++)
        {
            if (sizes[i].checked)
            {
                sizeType = sizes[i].value;

                if (sizeType === "Personal Pizza")
                {
                    sizeCost = 6;
                    price = price + sizeCost;
                }
                else if (sizeType === "Medium Pizza")
                {
                    sizeCost = 10;
                    price = price + sizeCost;
                }
                else if (sizeType === "Large Pizza")
                {
                    sizeCost = 14;
                    price = price + sizeCost;
                }
                else if (sizeType === "Extra Large Pizza")
                {
                    sizeCost = 16;
                    price = price + sizeCost;
                };
            };
        };
        document.getElementById("pizzaSize").innerHTML = sizeType;
        document.getElementById("sizeCost").innerHTML = " $" + sizeCost + ".00";
    };

    function getCrust() {
        var crustType;
        var crusts = document.getElementsByName("crust");
        var crustCost = 0;

        for (var i = 0; i < crusts.length; i++)
        {
            if (crusts[i].checked)
            {
                crustType = crusts[i].value;

                if (crustType === "Cheese Stuffed Crust")
                {
                    crustCost = 3;
                    price = price + crustCost;
                }
                else
                {
                    crustCost = 0;
                    price = price + crustCost;
                };
            };
        };

        document.getElementById("pizzaCrust").innerHTML = crustType;
        document.getElementById("crustCost").innerHTML = " $" + crustCost + ".00";
    };

    function getCheese()
    {
        var cheeseType;
        var cheeses = document.getElementsByName("cheese");
        var cheeseCost = 0;

        for (var i = 0; i < cheeses.length; i++)
        {
            if (cheeses[i].checked) {
                cheeseType = cheeses[i].value;

                if (cheeseType === "Extra Cheese")
                {
                    cheeseCost = 3;
                    price = price + cheeseCost;
                }
                else
                {
                    cheeseCost = 0;
                    price = price + cheeseCost;
                };
            };
        };

        document.getElementById("pizzaCheese").innerHTML = cheeseType;
        document.getElementById("cheeseCost").innerHTML = " $" + cheeseCost + ".00";
    };

    function getSauce()
    {
        var sauceType;
        var sauces = document.getElementsByName("sauce");
        var sauceCost = 0;

        for (var i = 0; i < sauces.length; i++) {
            if (sauces[i].checked)
            {
                sauceType = sauces[i].value;
            };
        };

        document.getElementById("pizzaSauce").innerHTML = sauceType + " Sauce";
        document.getElementById("sauceCost").innerHTML = " $" + sauceCost + ".00";
    };

    function getMeats()
    {
        var selectedMeats = [];
        var meatType = "";
        var meats = document.getElementsByName("meat")
        var meatCost;
        var x = 0;

        for (var i = 0; i < meats.length; i++)
        {
            if (meats[i].checked)
            {
                if (meatType == "")
                {
                    meatType = meats[i].value;
                }
                else
                {
                    meatType = meatType + ", " + meats[i].value;
                };
                x = x + 1;
            };
        };

        if (x > 0)
        {
            meatCost = x - 1;
            price = price + meatCost;
            document.getElementById("pizzaMeats").innerHTML = meatType;
            document.getElementById("meatsCost").innerHTML = " $" + meatCost + ".00";
        }
        else
        {
            document.getElementById("pizzaMeats").innerHTML = "No Meats";
            document.getElementById("meatsCost").innerHTML = " $0.00";
        };
    };

    function getVeggies()
    {
        var selectedVeggies = [];
        var veggieType = "";
        var veggies = document.getElementsByName("veggies")
        var veggieCost;
        var x = 0;

        for (var i = 0; i < veggies.length; i++) {
            if (veggies[i].checked) {
                if (veggieType == "") {
                    veggieType = veggies[i].value;
                }
                else {
                    veggieType = veggieType + ", " + veggies[i].value;
                };
                x = x + 1;
            };
        };

        if (x > 0)
        {
            veggieCost = x - 1;
            price = price + veggieCost;
            document.getElementById("pizzaVeggies").innerHTML = veggieType;
            document.getElementById("veggiesCost").innerHTML = " $" + veggieCost + ".00";
        }
        else
        {
            document.getElementById("pizzaVeggies").innerHTML = "No Veggies";
            document.getElementById("veggiesCost").innerHTML = " $0.00";
        };
    };

    function getPrice()
    {
        document.getElementById("total").innerHTML = "<strong>Total</strong>";
        document.getElementById("totalCost").innerHTML = "<strong> $" + price + ".00</strong>";
        price = 0;
    };

    //slide down the order and run the pricing functions

    $(".vieworder").click(function () {
        getSize();
        getCrust();
        getCheese();
        getSauce();
        getMeats();
        getVeggies();
        getPrice();
        $(".receipt").slideDown("slow");
    });

    //slide the order up and reset each item on the page

    $(".cancel").click(function ()
    {
        $(".size").slideUp("slow");
        $(".crust").slideUp("slow");
        $(".sauce").slideUp("slow");
        $(".cheese").slideUp("slow");
        $(".meats").slideUp("slow");
        $(".veggies").slideUp("slow");
        $(".receipt").slideUp("slow");
        document.getElementById("sizeForm").reset();
        document.getElementById("crustForm").reset();
        document.getElementById("cheeseForm").reset();
        document.getElementById("sauceForm").reset();
        document.getElementById("meatsForm").reset();
        document.getElementById("veggiesForm").reset();
    });
});