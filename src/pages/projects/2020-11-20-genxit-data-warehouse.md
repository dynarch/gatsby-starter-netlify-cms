---
templateKey: project-entry
projectName: Company Data Warehouse
startDate: 2020-11-20
endDate: 2021-02-28
company: genXit GmbH
webSite: http://www.genxit.de
libraries: BIML, BimlFlex
technologies: Azure Data Bricks
description: 
Implementieren von Data Warehouse fürs Unternehmenstruktur in MIcrosoft Azure. Das Projekt wurde mit DWA (Data Warehouse Automation) Tool BimlFlex und BimlStudio entwickelt.
tags:
  - flavor
  - tasting
---
###Schließt folgenden Layer ein: Quelle, Staging, Persistent, Landing, Raw Data Vault, Business Data Vault und Data Mart.
###Datenquellen:
IBM DB2 Datenbank des alten ERP Systems;
Azure SQL Datenbank des neuen ERP Systems;
Azure Blob Storage mit Export aus anderen Systemen. Die Daten sind anhand von PolyBase virtualisiert (externe Tabellen);

###Datenbearbeitung:
Datenreinigung, Pre-, Postbearbeitung und Analyse mithilfe von Azure Databricks.

###ELT Engine:
ist auf Azure Data Factory und gespeicherten Prozeduren basierend.

###Datenbank:
Data Warehouse ist hosted auf Azure Synapse und Bereitstellen von tabularischen Modellen in Azure Analysis Services.

###Visualisieren

mithilfe vom Power BI Berichten.
