killcom("oneSCOMConnector")



function killcom (pstrCOM)

'this function kills any COM+ application that has the name passed to it.

'Note: The caller must be listed in the administrator 'role' for the system application in COM+.



dim objadmcat



set objadmcat = createobject("COMAdmin.COMAdminCatalog")

objadmcat.ShutdownApplication(pstrCOM)

set objadmcat = Nothing



end function