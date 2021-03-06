(function() {

    angular
        .module('skyApp.signup')
        .controller('termsController', termsController)
        .run(['$templateCache', setTemplate]);

    termsController.$inject = ['$scope', '$uibModalInstance'];

    function termsController($scope, $uibModalInstance) {
        // $scope.close = function() {
        //     $uibModalInstance.close();
        // }
    }

    function setTemplate($templateCache) {
        $templateCache.put('/templates/signup-terms.partial.html',
            '<div id="termsCond" class="modal-body">' +
            '<div id="terms" class="cd-form">' +
            '<div id="terms-header">' +
            '<div class="pull-right cross">' +
            '<a href="" ng-click="cancel()"><i class="fa fa-times-circle-o" aria-hidden="true"></i></a>' +
            '</div>' +
            '<div id="start" class="headText">' +
            '<h3>Skycision Terms &amp; Conditions</h3></div>' +
            '</div>' +
            '<div id="terms-body">' +
            '<p><strong>SKYCISION LICENSE, TRAINING AND SUPPORT.</strong></p>' +
            '<p>' +
            '<strong>General.</strong> Subject to the terms and conditions of this Agreement, Customer can download the Skycision mobile device application (the "<u>Application</u>") for the purpose of accessing Skycision content and services, including without limitation, the analysis of aerial imagery provided by Skycision (collectively, such content and services, together with the Application, are referred to herein as the “<u>Services</u>”). Skycision will also store the Customer Data (as defined herein) on the servers. Subject to certain rights granted to Skycision herein, all rights, title and interest in and to the Customer Data shall remain the property of Customer and shall be deemed the Confidential Information (as defined herein) of Customer. The Services are subject to modification from time to time at the sole discretion of Skycision for any purpose deemed appropriate by Skycision, including, without limitation, adding new functionality or increasing operating efficiency. "<u>Customer Data</u>" means any information, records, images and/or data that Customer provides to Skycision via the Services.' +
            '</p>' +
            '<p>' +
            '<strong>License.</strong> Subject to the terms and conditions of this Agreement, commencing on the date specified in a term sheet or that the Customer accepts these terms and conditions (the "Effective 1 Date"), Skycision hereby grants to Customer a limited, non-exclusive, non-transferable license without the right to sublicense during the Term of this Agreement, to access the Services solely for Customer\'s internal use.' +
            '</p>' +
            '<p>' +
            '<strong>Availability.</strong> Skycision reserves the right to suspend Customer\'s access to the Services for maintenance, and in the event that the Customer is in breach of this Agreement.' +
            '</p>' +
            '<p>' +
            '<strong>Restrictions.</strong> Customer acknowledges that Customer has no right, title or interest in or to the Services other than the rights of use described in Section 1.2 above. Customer shall not, and shall not permit a third party to: (i) copy, download, provide screen prints, modify, transfer or assign the Services, or any copy, adaptation, transcription or merged portion thereof, (ii) reverse engineer, decompile, reverse-compile, translate, disassemble or reverse assemble the Services or the source code or object code for all or any portion of the Services, (iii) use the Services for any purpose other than its intended purpose, (iv) use the Services to process data for any third party (except as intended herein or otherwise permitted in the Documentation); (v) use or permit the use of the Services to operate a service bureau, (vi) sell, lease, assign, sublicense or otherwise transfer or disclose the Services in whole or in part, to any third party, including, without limitation, any parent, subsidiary or other affiliated entity of Customer; or (vii) allow access to the Services to any third party (whether directly or through the use of Customer\'s password).' +
            '</p>' +
            '<p>' +
            '<strong>Documentation.</strong> The Customer acknowledges and agrees that all documentation<sup>2</sup> provided by Skycision pertaining to the use of the Services (the "Documentation") shall be deemed to be the Confidential Information (as defined herein) of Skycision and shall not be disclosed to any third party. Skycision may update the Documentation at any time by providing notice to Customer.' +
            '</p>' +
            '<p>' +
            '<strong>Support.</strong> Skycision shall provide the Customer with support as provided in the Documentation' +
            '</p>' +
            '<p>' +
            '<strong>CUSTOMER\'S OBLIGATIONS.</strong>' +
            '</p>' +
            '<p>' +
            '<strong>Customer-Supplied Equipment.</strong> Except for the Services, Customer shall be responsible for obtaining and maintaining all communications facilities, Internet connectivity, third-party equipment, hardware and software necessary to connect to and operate the Services (the "CustomerSupplied Equipment"). Customer\'s access to the Services may be affected (without liability to Skycision) by the Internet being down, failure of Customer to provide all Customer-Supplied Equipment, failure of any Customer-Supplied Equipment to be operating properly, failure of the Customer to be connected to the Internet, or Customer\'s breach of any of the terms and conditions of this Agreement. Customer shall be solely responsible for all charges incurred by Customer in the use of the Services (including without limitation all costs for use of the CustomerSupplied Equipment).' +
            '</p>' +
            '<p>' +
            '<strong>Customer Data Compliance.</strong> Customer is responsible for ensuring that Customer, and its authorized users, complies with Customer\'s obligations under this Agreement. Customer will observe all of its obligations under all relevant privacy and data protection laws or regulations and all local, state and federal regulations and laws, including without limitation all Federal Aviation Administration regulations, in its use of the Services, Customer Data, and Customer-Supplied Equipment (including operation of the drones).' +
            '</p>' +
            '<p>' +
            '<strong>General.</strong> Customer shall cooperate with Skycision in connection with the performance of this Agreement, including, without limitation, in establishing a password or other procedures for verifying that only employees or consultants of Customer have access to the Services.' +
            '</p>' +
            '<p>' +
            '<strong>Indemnity for Customer Data.</strong> Customer will defend, indemnify and hold Skycision harmless against any third party claims, losses, or damages arising from or relating to: (a) Customer Data; or (b) violations of law or regulation by Customer relating to Customer Data or Customer\'s use of the Customer-Supplied Equipment. Skycision will (i) provide Customer with notice of the claim within a reasonable period of time after learning of the claims; and (ii) reasonably cooperate in response to Customer\'s requests for assistance. Customer may not settle or compromise any indemnified claim without Skycision\'s prior written consent.' +
            '</p>' +
            '<p>' +
            '<strong>Third Party Legal Terms Incorporated by Reference.</strong>' +
            '</p>' +
            '<p>' +
            '<strong>Apple.</strong> In addition to terms and conditions set forth elsewhere in this Agreement, Apple, Inc. ("Apple") also requires that this Agreement between Skycision and Customer include the following:' +
            '</p>' +
            '<p>' +
            '<i>Acknowledgement.</i> Skycision and Customer each hereby acknowledge that this Agreement is concluded between Skycision and Customer, and not with Apple. Skycision, not Apple, is solely responsible for the Application licensed hereunder and the content thereof.' +
            '</p>' +
            '<p>' +
            '<i>Maintenance and Support.</i> Skycision is solely responsible for providing maintenance and support services with respect to the Application as required under applicable law, if any. Skycision and Customer each hereby acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Application' +
            '</p>' +
            '<p>' +
            '<i>Warranty.</i> Skycision shall be solely responsible for any product warranties not effectively disclaimed hereunder. Notwithstanding anything to the contrary herein, and without limiting the disclaimers and limitations set forth in Sections 7 and 8 below, in the event of any failure of the Application to conform to any such applicable warranty, Customer may notify Apple, and Apple will refund the purchase price for the Application to Customer. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the Application, and any other claims, losses, liabilities, damages, costs or expenses attributable to any failure to conform to any warranty will be Skycision\'s sole responsibility.' +
            '</p>' +
            '<p>' +
            '<i>Product Claims.</i> To the extent Customer, or any third party, has any claims relating to the Application or Customer\'s possession and/or use of the Application including, but not limited to: (i) product liability claims; (ii) any claim that the Application fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection or similar legislation, Customer and Skycision each acknowledge that Skycision, not Apple, is responsible for addressing any such claims, subject to the terms and conditions set forth in this Agreement and subject to applicable law.' +
            '</p>' +
            '<p>' +
            '<i>Intellectual Property Rights.</i> In the event of any third party claim that the Application or Customer\'s possession and use of that licensed Application infringes that third party’s intellectual property rights, as between Skycision and Apple, it is Skycision, not Apple, who will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim arising under this Agreement or applicable law.' +
            '</p>' +
            '<p>' +
            '<i>Legal Compliance.</i> Customer hereby represents and warrants that (i) Customer is not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) Customer is not listed on any U.S. Government list of prohibited or restricted parties.' +
            '</p>' +
            '<p>' +
            '<i>Developer Name and Address.</i> All end-user questions, complaints or claims with respect to the Application should be directed to Skycision, via e-mail at [brendan.carroll@skycision.com].' +
            '</p>' +
            '<p>' +
            '<i>Third Party Terms of Agreement.</i> Customer must comply with applicable third party terms of agreement when using the Application.' +
            '</p>' +
            '<p>' +
            '<i>Third Party Beneficiary.</i> Customer and Skycision each acknowledge and agree that Apple, and Apple’s subsidiaries, are third party beneficiaries of this Agreement, and, upon Customer\'s acceptance of the terms and conditions of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against Customer as a third party beneficiary to this Agreement.' +
            '</p>' +
            '<p>' +
            '<strong><u>Google Maps/Google Earth.</u></strong> The Services rely on the Google Maps/Earth service provided by Google, Inc. ("<u>Google</u>"). By using the Services, Customer agrees and acknowledges that use of Google Maps/Earth functionality integrated into the Services is subject to the Google Maps/Earth Terms of Service (' +
            '<u><a href="https://developers.google.com/maps/terms#section_9_1" target="_blank">https://developers.google.com/maps/terms#section_9_1</a></u>) and Privacy Policy' +
            '<a href="http://www.google.com/policies/privacy" target="_blank">http://www.google.com/policies/privacy</a>.' +
            '</p>' +
            '<p>' +
            '<strong>PAYMENT.</strong>' +
            '</p>' +
            '<p>' +
            '<strong>Fees.</strong> Payment of all undisputed fees and expenses pursuant to Skycision\'s invoices (the "<u>Fees</u>") will be due and payable prior to the commencement of each Term. Customer will pay all undisputed amounts due under Skycision’s invoices in U.S. currency, free of any and all currency controls or other restrictions. If the Agreement is terminated by Customer as a result of Skycision\'s breach, Customer shall receive a prorata refund of prepaid Fees for the unused, posttermination portion of the then-current Term. Skycision does not store or maintain Customer\'s credit card information but instead contracts with a third party payment processor to collect and process Customer\'s payment information.' +
            '</p>' +
            '<p>' +
            '<strong>Late Payments.</strong> If the Customer fails to pay an invoice in a timely manner, all such invoices will bear interest at the rate of one and one-half percent (1.5%) per month, or the maximum rate allowed by law, whichever is less. Skycision shall be entitled to recover its costs and expenses incurred in collecting any amounts due hereunder, including reasonable attorneys\' fees. In addition to any other remedy available, Skycision may restrict or suspend Customer\'s access to the Services if payment is not made when due.' +
            '</p>' +
            '<p>' +
            '<strong>Taxes.</strong> Fees under this Agreement are exclusive of all taxes, including national, state or provincial and local use, sales, property and similar taxes, if any. Customer agrees to pay such taxes (excluding taxes based on Skycision\'s net income) unless Customer has provided Skycision with a valid exemption certificate.' +
            '</p>' +
            '<p><strong>CONFIDENTIALITY.</strong></p>' +
            '<p>' +
            'Protection of Confidential Information. Each party agrees not to transfer or otherwise disclose the Confidential Information of the other party to any third party except as allowed by this Agreement. Each party shall (i) give access to such Confidential Information solely to those employees and consultants with a need to have access thereto for purposes of this Agreement, and (ii) take the same security precautions to protect against disclosure or unauthorized use of such Confidential Information that the party takes with its own confidential information, but, in no event, shall a party apply less than a reasonable standard of care to prevent such disclosure or unauthorized use. Nothing in this Agreement shall prevent either party from disclosing the Confidential Information of the other party pursuant to any judicial or governmental order or as required by law, provided that the party (to the extent allowed by law) gives the other party reasonable prior notice of such disclosure to contest such order. "<u>Confidential Information</u>" shall mean confidential or other proprietary information that is disclosed by one party to the other party under this Agreement, including, without limitation, designs, software designs and code, product specifications and documentation, business and product plans, and other confidential business information. Confidential Information shall not include information which: (i) is or becomes public knowledge without any action by, or involvement of, the party receiving the Confidential Information hereunder; (ii) is independently developed by the receiving party without use of the other party\'s Confidential Information; (iii) is already known to the receiving party at the time of disclosure under this Agreement; or (iv) is disclosed to the receiving party by a third party who is entitled to disclose it without restriction.' +
            '</p>' +
            '<p>' +
            '<strong>Disclosure of the Existence of this Agreement.</strong> The parties each have the right to disclose the existence of this Agreement, but not the terms and conditions of this Agreement, unless such disclosure is approved in writing by both parties prior to such disclosure, or is included in a filing required to be made with a governmental authority' +
            '</p>' +
            '<p>' +
            '<strong>Use of Certain Information.</strong> Customer consents to Skycision engaging in data mining/benchmarking activities in connection with Customer\'s use of the Services and Skycision\'s use and commercialization of aggregated and de-identified Customer Data that it discloses to Skycision in connection with this Agreement, subject to the provisions of Section 4.1 of this Agreement and the satisfaction of each of the following conditions: (i) no Customer specific or Customer-identifiable information shall be disclosed, and (ii) the identity of the Customer shall be protected and shall not be disclosed.' +
            '</p>' +
            '<p>' +
            '<strong>INTELLECTUAL PROPERTY.</strong>' +
            '</p>' +
            '<p>' +
            '<strong>Intellectual Property Rights.</strong> Except as expressly set forth herein, Skycision shall retain all right, title and interest in, and shall be the sole owner of, the Services, Documentation, and Skycision\'s Confidential Information, including, without limitation, any Intellectual Property Rights (as defined below) therein. Customer shall not copy, distribute, reproduce or use such materials except as expressly permitted under this Agreement. "<u>Intellectual' +
            'Property Rights</u>" shall mean all forms of intellectual property rights and protections, including without limitation, all right, title and interest arising under United States common and statutory law and the laws of other countries to all: (i) patents and all filed, pending or potential applications for patents, including any reissue, reexamination, division, continuation or continuation-in-part applications throughout the world now or hereafter filed; (ii) trade secret rights and equivalent rights; (iii) copyrights, other literary property or authors rights, whether or not protected by copyright or as a mask work; and (iv) proprietary indicia, trademarks, trade names, symbols, logos and/or brand names.' +
            '</p>' +
            '<p>' +
            '<strong>Infringement Claims.</strong> Subject to the remainder of this Section 5.2, in connection with the licenses granted hereunder in Section 1.2, Skycision, at its sole expense, agrees to defend Customer against any third party claim that Customer\'s use of the Services, as delivered by Skycision to Customer and used in accordance with this Agreement and the Documentation, directly infringes a third party copyright or issued patent or directly misappropriated a trade secret (but only to the extent such misappropriation is not a result of Customer\'s actions under the laws of the United States) (an "<u>Infringement' +
            'Claim</u>") and indemnify Customer from the resulting costs and damages finally awarded against Customer to such third party by a court of competent jurisdiction or agreed to in settlement; provided that (i) Customer promptly notifies Skycision in writing of the Infringement Claim; (ii) Skycision has sole control of the defense and all related settlement negotiations; and (iii) Customer provides Skycision with the information, assistance and authority to enable Skycision to perform Skycision\'s obligations under this Section 5.2. Customer may not settle or compromise any Infringement Claim without the prior written consent of Skycision. In any action based on an Infringement Claim, Skycision, at its option and its own expense, will either: (1) procure the right for Customer to continue using the Services in accordance with this Agreement; (2) make such alterations, modifications or adjustments to the Services so that the alleged infringing Services become non-infringing without incurring a material diminution in performance or function; (3) replace the Services with a non-infringing substantially similar substitute; or (4) terminate the Services license, and upon Customer certified destruction or deletion of the Services, Skycision shall refund to Customer the unused remainder of any Fees prepaid by Customer and received by Skycision. Skycision shall have no liability or obligations for an Infringement Claim pursuant to this Section 5.2 to the extent that it results from: (a) modifications to the Services made by a party other than Skycision or under the direct control of Skycision; (b) the combination, operation or use of the Services with non-Skycision products; (c) use of the Services outside of the scope of this Agreement or in contravention of the Documentation; (d) Skycision\'s use of any designs, plans, instructions, specifications, diagrams or the like, provided by Customer, if any; (e) Customer\'s failure to use all upgrades and updates to the Services provided by Skycision, if the claim would not have occurred but for such failure; (f) use of open source technology or freeware technology or any derivatives or other adaptions thereof not embedded by Skycision into the Services; or (g) any Services that are provided on a no charge, beta or evaluation basis. Nothing in this provision shall be construed as a limitation on Customer\'s ability to retain legal counsel at its own expense to passively monitor the proceedings. This Section 5.2 sets forth Customer\'s sole and exclusive remedies and Skycision\'s entire liability with respect to Infringement Claims.' +
            '</p>' +
            '<p>' +
            '<strong>TERM AND TERMINATION.</strong>' +
            '</p>' +
            '<p>' +
            '<strong>Term. </strong>' +
            '</p>' +
            '<p>' +
            '<strong>Quarterly Term.</strong> If Customer has elected the quarterly version of the Services, the Agreement shall commence as of the Effective Date and continue for the period of thirty (90) days thereafter (the "Quarterly Initial Term"). Thereafter, this Agreement shall automatically renew for successive periods of thirty (90) days each (each a "Renewal Term"), unless either party gives the other party written notice of its intention to terminate not less than twenty (20) days prior to expiration of the Monthly Initial Term or then current Renewal Term, as applicable.' +
            '</p>' +
            '<p>' +
            '<strong>Annual Term.</strong> If Customer has elected the annual version of the Services, the Agreement shall commence as of the Effective Date, or the date upon which Customer upgrades to an annual term from a monthly term, and continue for the period of one (1) year thereafter (the "<u>Initial Term</u>"). Thereafter, this Agreement shall automatically renew for successive Renewal Terms, unless either party gives the other party written notice of its intention to terminate not less than twenty (20) days prior to expiration of the Initial Term or then current Renewal Term, as applicable.' +
            '</p>' +
            '<p>' +
            '<strong>Term.</strong> The “<u>Term</u>” of this Agreement shall be collectively (as applicable), the Quarterly Initial Term, the Initial Term and each Renewal Term (if any).' +
            '</p>' +
            '<p>' +
            '<strong>Termination for Cause.</strong> In the event of any material breach of this Agreement, the nonbreaching party may terminate this Agreement by providing thirty (30) days prior written notice to the breaching party; provided, however, that this Agreement shall not terminate if the breaching party has cured the breach prior to the expiration of such thirty (30) day period.' +
            '</p>' +
            '<p>' +
            '<strong>Termination for Insolvency.</strong> Either party may terminate this Agreement, without notice, (i) upon the institution by or against the other party of insolvency, receivership or bankruptcy proceedings, (ii) upon the other party\'s making an assignment for the benefit of creditors, or (iii) upon the other party\'s dissolution or ceasing to do business.' +
            '</p>' +
            '<p>' +
            '<strong>Termination for Convenience.</strong> Skycision may terminate this Agreement upon ninety (90) days prior written notice to the Customer.' +
            '</p>' +
            '<p>' +
            '<strong>Effect of Termination.</strong> Upon the expiration or termination of this Agreement, all license rights of Customer under this Agreement shall automatically and immediately cease. Section 6.5 and Articles 3 (for the Fees incurred prior to termination of the Agreement), 4, 5, 7, 8 and 9 shall survive expiration or termination of this Agreement for any reason.' +
            '</p>' +
            '<p>' +
            '<strong>LIMITED WARRANTY.</strong> Skycision warrants that, for a period of ninety (90) days after delivery, availability, or execution of the Agreement, the Services will function in accordance with the Documentation in all material respects. As Customer\'s sole and exclusive remedy and Skycision\'s entire liability for any breach of the foregoing warranty, Skycision will repair, replace, or refund the Services, at no additional charge to Customer. The limited warranty set forth herein shall automatically become null and void if a party other than Skycision modifies the Services in any way' +
            '</p>' +
            '<p>EXCEPT AS EXPRESSLY SET FORTH IN THIS SECTION, SKYCISION HEREBY (A) PROVIDES THE SERVICES, THE DOCUMENTATION AND SKYCISION CONFIDENTIAL INFORMATION "AS-IS" "AS AVAILABLE", AND "WITH ALL FAULTS" WITHOUT ANY WARRANTIES OF ANY KIND, AND (B) DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION , ALL IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT TO THE MAXIMUM EXTENT PERMITTED BY LAW. NOTHING HEREIN SHALL BE CONSTRUED AS A WARRANTY OF COMPATIBILITY WITH ANY PARTICULAR MOBILE/ COMPUTING DEVICE, OPERATING SYSTEM, OR OTHER SOFTWARE RESIDENT ON CUSTOMER\'S DEVICE.</p>' +
            '<p>CUSTOMER ACKNOWLEDGES THAT ITS USE OF THE SERVICES IS AT ITS SOLE RISK. SKYCISION DOES NOT REPRESENT OR WARRANT THAT THE SERVICES WILL BE ERROR-FREE OR UNINTERRUPTED; THAT DEFECTS WILL BE CORRECTED; OR THAT THE SERVICES OR THE SERVER(S) THAT MAKES THE SERVICES AVAILABLE ARE FREE FROM ANY HARMFUL COMPONENTS, INCLUDING, WITHOUT LIMITATION, VIRUSES. SKYCISION DOESNOT MAKE ANY REPRESENTATIONS OR WARRANTIES THAT THE INFORMATION (INCLUDING ANY INSTRUCTIONS AND/OR ANALYSIS) PROVIDED IN THE DOCUMENTATION AND/OR IN CONNECTION WITH THE SERVICES IS TRUE, VALID, ACCURATE, COMPLETE, OR USEFUL. SKYCISION DOES NOT WARRANT THAT CUSTOMER\'S USE OF THE SERVICES IS LAWFUL IN ANY PARTICULAR JURISDICTION, AND SKYCISION SPECIFICALLY DISCLAIMS SUCH WARRANTIES.' +
            '</p>' +
            '<P>' +
            '<STRONG>LIMITATION OF LIABILITY.</STRONG> IN NO EVENT SHALL SKYCISION BE LIABLE FOR ANY INDIRECT, PUNITIVE ,INCIDENTAL,SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THE SERVICES, DOCUMENTATION, OR CUSTOMER DATA, THE DELAY OR INABILITY TO USE THE SERVICES OR OTHERWISE ARISING FROM THIS AGREEMENT, INCLUDING WITHOUT LIMITATION, LOSS OF REVENUE OR ANTICIPATED PROFITS OR LOST BUSINESS OR LOST SALES, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE, EVEN IF SKYCISION HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. THE TOTAL LIABILITY OF SKYCISION, WHETHER BASED IN CONTRACT, TORT (INCLUDING NEGLIGENCE OR STRICT LIABILITY), OR OTHERWISE, SHALL NOT EXCEED, IN THE AGGREGATE, THE FEES PAID TO SKYCISION HEREUNDER IN THE TWELVE MONTH PERIOD ENDING ON THE DATE THAT A CLAIM OR DEMAND IS FIRST ASSERTED. THE FOREGOING LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL PURPOSE OF ANY LIMITED REMEDY.' +
            '</P>' +
            '<P>' +
            '<strong>GENERAL PROVISIONS.</strong>' +
            '</P>' +
            '<p>' +
            '<strong>Relationship of the Parties.</strong> The relationship established between the parties by this Agreement is that of independent contractors, and nothing contained herein shall be construed to: (i) give either party the power to direct and/or control the day-to-day activities of the other, (ii) constitute the parties as partners, joint venturers, co-owners or otherwise as participants in a joint or common undertaking, or (iii) allow a party to create or assume any obligation on behalf of the other party for any purpose whatsoever, except as contemplated by this Agreement.' +
            '</p>' +
            '<p>' +
            '<strong>Complete Understanding; Modification.</strong> This Agreement constitutes the complete and exclusive agreement of the parties and supersedes all prior understandings and agreements, whether written or oral, with respect to the subject matter hereof. No modification of or amendment to this Agreement, nor any waiver of any rights under this Agreement shall be effective unless in a writing signed by both parties hereto.' +
            '</p>' +
            '<p></p>' +
            '<p>' +
            '<strong>Severability.</strong> If any provision of this Agreement is held to be invalid or unenforceable under the circumstances, such provision\'s application in any other circumstances and the remaining provisions of this Agreement shall not be affected thereby.' +
            '</p>' +
            '<p>' +
            '<strong>Nonassignability and Binding Effect.</strong> Customer shall not assign this Agreement to any third party without the prior written consent of Skycision. For purposes of this Agreement, an assignment shall include the merger or consolidation of Customer with or into another entity or the acquisition of fifty percent (50%) or more of the outstanding voting equity of Customer by a third party after the Effective Date. Skycision reserves the right to assign any portion of this Agreement with written notice to Customer. Subject to the foregoing, this Agreement shall be binding upon and inure to the benefit of the parties hereto and their permitted successors and assigns.' +
            '</p>' +
            '<p>' +
            '<strong>Export Laws.</strong> The Services are subject to United States export control laws and regulations and may be subject to export or import regulations in other countries. These and regulations include licensing requirements and restrictions on destinations, end users, and end use. Customer shall comply with all United States and international export and import laws and regulations that apply to the Services and acknowledges that Customer has the responsibility to obtain any and all necessary licenses to export, re-export, or import the Services and covenants that it shall not, directly or indirectly, sell, export, reexport, transfer, divert, or otherwise dispose of any Services, source code, or technology received from Skycision under this Agreement to any other party or destination prohibited by the laws or regulations of the United States, without prior written consent from Skycision and governmental authorization as required by those laws and regulations.' +
            '</p>' +
            '<p>' +
            '<strong>Force Majeure.</strong> Skycision shall not be liable for any loss resulting from a cause over which it does not have direct control, including, but not limited to, failure of electronic or mechanical equipment or communication lines, telephone or other interconnect problems, computer viruses, unauthorized access, theft, operator errors, severe weather, earthquakes, or natural disasters, strikes or other labor problems, wars, or governmental restrictions.' +
            '</p>' +
            '<p>' +
            '<strong>Waiver.</strong> No failure or delay on the part of any party in exercising any right hereunder, irrespective of the length of time for which such failure or delay shall continue, will operate as a waiver of, or impair, any such right. No single or partial exercise of any right hereunder shall preclude any other or further exercise thereof or the exercise of any other right. No waiver of any right hereunder will be effective unless given in a signed writing.' +
            '</p>' +
            '<p>' +
            '<strong>Commercial Software Notice.</strong> If the Services are being licensed by or on behalf of the U.S. Government or by a U.S. Government prime contractor or subcontractor (any tier), then their rights in the Services and Documentation are only as set forth in this Agreement; this is in accordance with 48 CFR 227.7201 through 227.7202-4 (for Department of Defense (DOD) acquisitions) and with 48 CFR 2.101 and 12.212 (for non-DOD acquisitions).' +
            '</p>' +
            '<p>' +
            '<strong>Choice of Law, Forum and Arbitration.</strong> This Agreement shall be governed by and construed in accordance with the laws of the Commonwealth of Pennsylvania, without giving effect to its principles of conflicts of laws. Any dispute arising out of or in connection with this Agreement shall be finally decided by arbitration in Pittsburgh, Pennsylvania according to the Rules of Procedure for arbitration of the American Arbitration Association.' +
            '</p>' +
            '<p>Notwithstanding anything to the contrary set forth above, this Section 9.9 shall not apply to disputes relating to: (1) Customer\'s or Skycision\'s intellectual property (such as trademarks, trade dress, domain names, trade secrets, copyrights and patents); (2) violations of third party terms and conditions; or (3) any dispute in which Skycision is seeking injunctive or equitable relief to prevent further breaches of this Agreement by Customer.</p>' +
            '<p>' +
            '<strong>Entire Agreement.</strong> This Agreement constitutes the entire and exclusive agreement and understanding between the parties relating to the Services and supersedes any and all oral or written representations, understandings or agreements relating thereto.' +
            '</p>' +
            '</div>' +
            '<div class="modal-footer cd-form-bottom-message">' +
            '<a href="" ng-click="cancel()"><strong>Close</strong></a>' +
            '</div>' +
            '</div>'
        )
    }
})();
