var friends = [
    {
    name: "Pikachu",
    photo: "https://secure.img1-ag.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg",
    scores: [5,1,4,4,5,1,2,5,4,4]
    },
    {
    name: "Goku",
    photo: "https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/20/C0A9B238-91F6-46AA-ABDC-3FC720228C25.png/revision/latest?cb=20171104014554",
    scores: [5,1,4,4,5,1,2,5,4,4]
    },
    {
    name: "Rick James",
    photo: "http://www.rickjames.com/graphics/homeimage.jpg",
    scores: [5,1,4,4,5,1,2,5,4,4]
    },
    {
    name: "Will Ferrell",
    photo: "https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzc3ODM1MDIy/will-ferrell-9542601-1-402.jpg",
    scores: [5,1,4,4,5,1,2,5,4,4]
    },
    {
    name: "Dog The Bounty Hunter",
    photo: "https://akns-images.eonline.com/eol_images/Entire_Site/2019816/rs_634x1024-190916105629-634x1024-Dog_the_Bounty_Hunter-gj-9-16-19.jpg?fit=inside|900:auto&output-quality=90",
    scores: [5,1,4,4,5,1,2,5,4,4]
    },
    {
    name: "Bob Ross",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Bob_at_Easel.jpg/220px-Bob_at_Easel.jpg",
    scores: [5,1,4,4,5,1,2,5,4,4]
    },
    {
    name: "Doug",
    photo: "https://vignette.wikia.nocookie.net/doug/images/a/a5/Doug_Funnie2.png/revision/latest?cb=20180531191407",
    scores: [5,1,4,4,5,1,2,5,4,4]
    },
    {
    name: "Peter Griffin",
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Peter_Griffin.png/220px-Peter_Griffin.png",
    scores: [5,1,4,4,5,1,2,5,4,4]
    },
    {
    name: "Richard Simmons",
    photo: "https://pbs.twimg.com/profile_images/3468757441/563cf294407c44f0e6ce0e49ae031e34_400x400.jpeg",
    scores: [5,1,4,4,5,1,2,5,4,4]
    },
    {
    name: "Christopher Walken",
    photo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhUQEBAVFRAVFRUVDxAQFQ8VFRUQFRUWFhYVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0lHSYtLSstLS0tKy0tKy0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAECBAUGBwj/xAA5EAACAQIEBAMFBwQCAwEAAAABAgADEQQSITEFQVFhBiJxBxOBkcEjMkKhsdHhFFJi8DPxY3KCNP/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACARAQEBAAMBAQEBAQEBAAAAAAABAgMRITFBEiJRBBP/2gAMAwEAAhEDEQA/APG2EgYRxIGK6ahEIo4hARJMiQpwhgUz8TUQiCQWESLVsrCCFAg0hliOrKvXEoVZo1xM+rGyhzq7SdOQaTpx3JPqTR0jNEkB/wBTjiXeF8LqYhgqjQ8/gT9DOu4R4QVcr1RmJGiHrcazdNeSZc7gPDlasoZRpbNf/EkgfHT8xNFPAWIYBgwFxfUHRRue+s9GwVIWObSmulx1AsFH5/KZvHuLsRZNKY0GXn1158hDZIheXWq5BPCNBSVqVmN7fcS7Kw31va28q1vDdKxyZ2tpfqbzosPnP3hlJBOvJB19b2/7iqYxUXXvbpa9hbpFum9/65rF+GAKeZEbN5RuDrzNukw6nCqyAkobAXOh0HWdkeMCxJ9B6QmHxivyGY6fCD+zTuPPai2teGozrOJ8KpVOzf3LOfxPD2pAE6gmwIh77V476AYJoWCaCLaQMgwkzImM59IRR4oSGIjpGMdIQ/RrRR4oFeg2g2hngmmDSEcRRTEEpwjQdOEaBXPxNYVINIRIKtlZSFWCSFWJXVkKvM6rNKvM6rGyhzq7SSSLSSR3HPqTSxw3DGq4UKxv/by7yu07P2YYDPWNQgZVte/fY/CaRt669dpwPgP9OiMR5jYEeoAJ7bGS4vjFp29T8CD/ACJ1tRVuote4bL1JBJsJwHi6uvmKjMhPkIv3v6EbQ3yOee10HDU9/Ra3J3cg30JuPnv+UDisPRWmF3G7rpcEC+Zfy/LcTheB+JsRQY+7BKG2YNrrr+02OIcTZgtS2S4uCPwPsfUfvFtNMi43EpewsLiwIv8AdI/blynPY2pe63G1x8P4P5SrxHGbEG2/pY9O37zOfEltOfI/zEsqk6ExQsR00+Wlx8/1kqGMynQ/xA06buBpqf4lSqjKdRYfxM3VnrqsGwdSR63O5A3J5KsrvWpsbZSw67D4CDwLWw9ydX5dQNh6bfKApLm59hb6don6btU4thMpzKLKZlNNrHUbKV7X/wBExWlIrnXeUJFpMyDRiaRiiihIRiSIxJCX9WBFEI8CyDwTQrwZgDQceKKEgiQhg0hTArn4kkIkEkIsFVytJCrA04ZYldWUK0zas0q0zq0OUedXaOkZo6Sji/TtPU/Y4gKV03byso3uutx6ieWNPZ/YdQpvTqvl+0XKNCLlNbG1+ubkNvSHJOX47biOCUUxmYqw1Vhy6meZcbwj16xVSDcjOV2fS2Yjr3nqHHFLg2+7taZnBuEIA1S23UDf/bxdUnHHM8K8KhAGZfnFx/DUyMtrWHwnXY3Er7o2tpp8T/pnE8VxOZu0nq9OrGe3LVeC326m31jJwSxFxsZu++FrCR9+BrvJXVWnHkGjw9VtpylLinDww0AvNNq4Agw94vdPZOunMJopQ/hWwHpeF4QQSPKMi/eY63PTpLONoDOSNzvKVBDcC3lG2v8Aolpe44956qXEaR1fkec52oJ1eNcGmy21tOUePDcfyoSDSZkGjNpER40UKZGJY5jLMCwI8YR5lkakEYZ4FoIG0IojFCmIkKYJIUwK5+HpwiwaQggquVmnDLA04ZYldOUa0zq00a0zq0OUub4rNHSJ4klHF+p3npPsi46tCsyvVCowVQDcljfoNjrfpPNWnWezHBipjqNz5Q2Yg3A8uuvU3Amgck8fQ+No8hufn/EAUCU2FrGxJ9bgfWX8PXDvY8r/AC5TL4u5BYKCSRY26XJ/W01Sw4rHYhgWU7XJ+X8TneI3ub6cx6Td4ywVzqM2nlU3sbC9/jeZOKqBgWtrsbzn07sMrNbnEASLyw7qCL2+QMnVxCgCygfAdYinSgVbrDU63XflJbm5GkHVoE7TMq4/a8z0Nz+006pGUiY4JDGx9I+XPyrNYZRvcW56zmsQLMbdZu4yrZbn0+MwapuSZUvF+0MyDSZkGjDUYoooUzmMI8iJgqypijLHmVKpAtD1IFoG2HFFFCmmkKYJIWBTPxJIQQSQogquVinDrAU4dYldWTVpnVpo1dpnVocp83xWeJIniSUcX6k06n2cg/1dNVZszOoypobXFyTyHpOXM3/AmPNDFI4OmtxYa6aa7gX+k0Dknj6SwlRQxsOWvy2/3rMLxRxb3ammn/IQSTt5QBz+Impwo/cBILFSXPV7a/WcrxDBiviqqM1iiM6g63sLgD01MXdJxT9cJxDiVenZ6iqFNyFYkXHYEysniMVPKy5dD0O+9usu+KMKtakGBDaC7tf3iFQLoRtlFtNBoZx7UjcBb99NzJdSuiXUrqHwZqIKitdTckjkw2Ug/OZmL4mQbW10uOh5zf4XhGp4Rs2mZxa/IBefxJnFcRpNnbXnp3gk9Nq2TtcGOrPoGHpdifyEJR4nXU2b47/XWZP9KzAWJvzFyB8pboYRiAMxNut9+xjXMJNa7arVxU82xmew1J5XtLGHp5RrIA6ntt9TBPA37Ds65cp105zn6y2JmnXqWJFv1+cza5uZSDidQEyLSRkWjBUIo0eFM8jJSMIUdYoligUEqQDQ1SBaCG2GYojFCkmsLArDQKZOhhRApCiCq5WKZh1lamYcGJXTmnqHSUK0u1DKNaGE5r4rvGSJoklHF+iND4SsVKgNYfiIudTy/T84AyKG0Bq9/wDZ5x/37urWJQA32IBFiCOWoh/GmHIYYik2V9bnqdRaeZezrjRw+IH4hVZaT5iQMrkar1YGx9BPWuMH8LC4MTdLjPVeaY+i9W7lRTP4tbBu4HSV+HYJVcE6sfxHQD0E7XxBw5KOHSoRqwJH7zzxsV72slIvlVmAdxyXnb9JP1edddu94thwcHTZdFJJueY2/czhcThASbkb/Odj4j4ph6eCoUsM4emLjODe1tLHvcmcHiMTSqAgtlcaoR1HMiaz0JfEKnD3XUDMvbcQuDwjO22VR95mv+kPgcZnUE3Dc+t4LGY2pYgsLcrfWDu/DdZnq/iClso3Ewq5K5j+H63/AJhkqn484DjVcBAgPmJubdB1jZievazalYtrANJiQaUUs8DMi0kZExkqHHjR4UjxjHjGEKKsUZYoD9i1IFoapAtBD7DMURihRSWGgVhoFMmSGECkLBVcjIYQGAQy3gcLUrVEo0lzVKjKlNRzZjYeg7xV5fBuHcPq4motGihZ2IGgNlBNszEfdUde0sY7wlilrrQQLULsFSrTze7vzzEi6gam5GwnpfGMNS4RRp0qHm93lOLbTNWeopDEnpYMAOQtMPB8RRTnp2ek18reb4jsRfaTu7L4W2ajFx3gjDoiIuJzVygZqgt7osfwhbZgBte/XTlOb4j4bxWHGZ0DJ/fSOYD1G4+U7uuaNY+QLTbkRpr3ErI1em3mRjbZluQR105dvygnJol48vObyKz0epTwVfWrh1zHd1DKSe+Ugzm/EPh4Ur1cPc0vxJqSncHmv5j9KZ5JfCa47PWLhKjK6spsykMuttRr9J9JlkxGHWuuoZUcejAH6z5nBnsvsq8TrWw7YOq32tI3QH8VEtcW/wDUm3plj0ml/wBqeMHuaSg6hb2HLQCebcPwFwWb7x116HadH7SMYTVybqtsx/x1/XXSc3h8XVNzTpEk2sSQBYdOsnfaOfJIHxKgadlUkA6m3M9+sz6WFGbXrLnEMRWIuyNe2mgIB7WmbTxrA6qT8NYeq1apXIbj7p37GFajmsZnLjb6a+huDNLDYkKuU72up7RL3DSyhPSsbzK4s12+X6TWx1cWAHOc1WrZ3LcidPTlHyT96FEg0msi0Z0X4CZEyZkDGQ0HHiMUKRCJo8ZoQqQiiWNAyxUgWhqkAYItyIGKIxoUU1hhALDiCqYRWFghCQKZEWehexvhLVcW2ItdaCEIf/NVGUfJc5+U87We0ezdHwHDGxBFnxTlkuNfdKuVD6GzH0Ii02r/AJ6gfHMTTqiuDTD1KbIhzb+7W4DW63/WZ1eoXwSYPDJTpimS2pJzMzZiSTfU6/MDQATmuI8ZP9TnoGzMbPcXDXOoIO4mhiuKYdKzUiCADZmBzKDfY26aAkc78pLqz4b/ADfrOq1DRP2qtT/yIJp/BxoPjNfCcWZbDNYEXBOqsPUS6FOW6MKlM8tD/BlfJhivu2QJrew0Fz0HeJb/ANh5OvlNisUlfTLYj8Qtcnvbcesp03ekcri6H7rbgwdfhdmvQc7/APGx1t26y7w+rUtlZOxV1/eD8H9czxzw8da2HW67vSG6nmVHMdpj8H4g2Gr066703DEDmoPmX4i4+M9S2F8mXsJyXibAU8r10T7RdTbYjmSOo3lOPk78qfLjqdxr+LUOJLLRUs7Gnlyi+ZWBs3pqvzHWZ+Pc0LUlHmWyv62tcHmNJZ9nuOxNbC1jSdBWw4SmpZSWNA3ZRe+litttRbpNbieFouoqi1wACDycfeB73j3PSGN9xzPFsYWG/I/vMda03MdiwbgcpXoYqnsQPjY3+cF8PJ3+sysmZbga8vXtB++va15a4rjEt5RqdgJRoVtzlsN2JhnwmrJei4g+VCxPmIyp8efyvMOk9j2ljiOL942n3Rt37yraWzOo5tb/ANdxo06qnYx2mdFmg/haf+m9excMgYAVD1j5zD0W80qRikQZIGHov9whEY8RmHuGEeRBjzB2s1IBoepANFi+0DGiMUZJJYYQKwywVTCIhIOTgPle4PQFSvRpsLq9WmjAcwzqCPzntPjTGsiOi/co02CjYZm00HIDMAOwnB+zThOWoOIVkJp0v/zJY3q19gVG9l1N+tuhnRceo43E0qrGllFUhVQlc2YMDqNxoOcTUG2dvO8mbzSYsTc6nrNfD+FOIOPLhyRa98yWy8ze+0O3hR1CfaqSyB2A2F+WbnEvn02ffjkF4pVoVXNGoVGY6A+U68xtO8XGM1KnUrIq1HXNkNiwB2b/ABuNQDrrM2l4LUVfeVaqlcxf3YXynnZtdRflzmpW4bRJL1ajOzEl9bD4ATb1iwnFx8mbe/imtQFrhrHvNjB4p9r3HzmbSwuHHlGbe+50P7TYo1kpr2G3X5yOuq6cyy/UsXiPJrYX2mQyX0I1/IjoY2Lxgc/oNJCm5BGnlO4P0gk6G3tu+zvA0MOMSg0aoUZR/hqLDrYn85F+CDEVnCvYBstSnqLjrM8VWQhkaxGqkWuPnofjOa4xxbiWHZqgr3V7j3qpT2Oh5eU20l8a/ryuTlx/Hsnipx6tSpVmp0izLt5yLg8+Up0lZtzbpaYlWqzHMSSTqT3kzjKu2c/l+0t/Dn/+kaNSy6k+pP6CZ+JxZfQaL+Z9ZXYknU3PeOBGkJd9mAjx7RQkIRRR5mNHEUcCZjiOI0eZj3ivI3jXmZO0UjePMP8AVWakA0NUgWiR2bQMaIxCFJIQ6wCwyzU+EYWmtyB1IF/XSCmt4WwvvsZh6dr5q1O4P9oYFvyBgNK9/wAHgkw75iAEQLToJoAtNFyjTqbTNxGOo07itURSbi5IVbG9z6m/6xvHGJSnSWrV3qAlKdidB1E8axlc1GJuct/KpJNvnEtrSedvVfEfjbDChUpYaqCzKUfLfVW3A/ecBgeP1VARwHQXyX0ZQeQPMesx0WWaFK+sW+/VMefG23Ghc3pm1tPNvf4SjifEaqR9lcdM2vrtK9apYW+Uw6+rfoJsYloc3JczuOjPiSle4pMOpOXQfWbNcF6Yq0/NSI0dTp8eh7Tgbf8AULgeNVMM4ysSmYGpSv5XXmCNr95TXFPxz4/9F7/06F21lqhiraE3EuVUp1FFajY02F1HTsehmTVXKbga8xIddunvpqrY2KkX6GEq0gylWAIO469pXGHtZussNhnIvy6iJfFZ65Djvho01NWjcoNXQ6lR1HUTm7T0us51XnaxvzE4XiPD2pVSltCboeWU/tOji3b5XFz8cz7FNKdhfrt6SJENWOthsNBB2lnMhEBJWimZAxxHC3jvYac5mMBJRARmMzFGJjXjEzMe8QMa0cLMxRSV+0ULLDwLQrwLRI7NomKNFCkksMsCIVYKfJp6Z7FvDprV3xjD7OipSmeteqCun/qhY/8A2s47wXwdcbjaGHdstNn+0boio1RgO5CEDuZ7/TxFPD4daVJRTphvs0UABaY0HqdLk94K1v5HJe0yv72qyAaIth2VZ5bUWx1npfijEU3LtffcDn27TzXGaub6D6SX2qfInSF7f7yljOFFucz0xQFze37QNXG30T4sd40zaW8kguLxRJsJXprb95FEkqr2EtmdObe7qh16thM9PMbx673NofCUSxAHOYja8P8AGDhQc4LUXNinMHm699vWdLRajUs6OHB5i+nYjcGcLj6gLBR91dBJYLENTN0Yqe316xNYlV4+W58vx6lRw+YWtsO+nziNZVBW2onNeHPFhV/c4mxV7AVdBY2sAw+vedBjaRzXO21+3Kc+uPr67OPll9ijiKgJ21lPG8MWuhGzgEo3Q22PaWcShX06zleOcdZgaNNvLs7jn2HabGb34PLrMnrDcWJB5Eg26iKDU2hVF51vNRkqdAnU/KGSnJM1pmCqEKJXXqYzvmN+Ue8zHZoO8TGREzJ3jgRKnWSmYgI8a8V5mStFI3imYZzAkxRRY6tIGPGihTSEKpiigPlq0674b3b02tURwxYf3EEH4WNp3Q8YGtTFx5soB9RFFByQnFbXMcT4uxYrckDr15zFxmLJ1MUUXMht6qklUv6X0Es0liilnPRC1pRxNaNFNQCorzmpTPu0J5kWEUU0FnXuYamdY0UDJYk3nf8AhTif9RQ92/8AyUwPN/cv4T68ooovJO4pw2zUVPGfEBSphV++1wD/AI8zOBiigxOoPNbdFJI9ooo6Sx72V8RUvpFFMyAjExRTMjvCqIopmOY0UUzFaKKKZitFFFCz/9k=",
    scores: [5,1,4,4,5,1,2,5,4,4]
    }
];

module.exports = friends;