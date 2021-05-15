
var s= input("Enter a string\n")
s=" " + s
var string=""
var c=1
for (i in range(0, len(s)))
{
    if (s[i]==" " || s[i]==".")
    {
        string+= s[i+1].upper()
        c+= 1}
    else{
        string+= s[c].lower()
        c+=1}
    if (c== len(s))
    {
        break}}
string= string.replace(" An ", " an ")
string= string.replace(" A ", " a ")
string= string.replace(" And ", " and ")
string= string.replace(" The ", " the ")
string= string.replace(" Or ", " or ")
string= string.replace(". an ", ". An ")
string= string.replace(". and ", ". And ")
string= string.replace(". a ", ". A ")
string= string.replace(". the ", ". The ")
string= string.replace(". or ", ". Or ")
console.log(string)