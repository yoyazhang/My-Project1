var cities = {};
cities['China']=['Beijing', 'Yantai', 'Shanghai', 'Kunming'];
cities['Japan']=['Tokyo', 'Osaka', 'Kamakuru'];
cities['Italy']=['Roma','Milan','Venice','Florence'];
cities['America']=['New York','San Francisco','Washington']

function setCity(province, city)
{
    var pv;
    var i,j;

    pv=province.value;
    city.length=1;

    if(pv ==='default') {
        city.options[0] = new Option();
        city.options[0].text = '-Cities-';
        city.options[0].value = 'default';
        return;
    }
    if(typeof(cities[pv])=='undefined') return;

    for(i=0; i<cities[pv].length; i++)
    {
        j = i+1;
        city.options[j] = new Option();
        city.options[j].text = cities[pv][i];
        city.options[j].value = cities[pv][i];
    }
}