(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"data":{"name":"Player498","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false,"rate":1},"defaultLocale":"en"},"paddingLeft":0,"scrollBarWidth":10,"scrollBarMargin":2,"backgroundColorRatios":[0],"contentOpaque":false,"backgroundOpacity":1,"paddingRight":0,"desktopMipmappingEnabled":false,"class":"Player","mouseWheelEnabled":true,"definitions": [{"class":"Panorama","overlays":["this.panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6_tcap0"],"partial":false,"vfov":180,"label":trans('panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6.label'),"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6_t.jpg","class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","rowCount":2,"url":"media/panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6_0/0/{row}_{column}.jpg"},{"width":12288,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6_0/1/{row}_{column}.jpg"}]}}],"thumbnailUrl":"media/panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6_t.jpg","hfov":360,"id":"panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6","pitch":0,"data":{"label":"Millennium Cave 2"}},{"data":{"name":"Container500"},"paddingLeft":0,"scrollBarWidth":10,"scrollBarMargin":2,"backgroundOpacity":0,"contentOpaque":false,"paddingRight":0,"class":"Container","propagateClick":false,"scrollBarOpacity":0.5,"layout":"horizontal","toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","scrollBarColor":"#000000","paddingTop":0,"overflow":"visible","gap":10,"minHeight":20,"id":"Container_2F20F481_2390_C1CA_41AC_75CF5FD50C9F","paddingBottom":0,"minWidth":20,"shadow":false,"borderSize":0,"children":["this.ThumbnailList_2F205483_2390_C1CE_419F_862CA3C44408","this.IconButton_02BB7201_1482_5529_4195_94523B94CFC2"],"left":0,"verticalAlign":"bottom","horizontalAlign":"center","bottom":0,"right":0,"height":200,"borderRadius":0},{"class":"Panorama","overlays":["this.panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895_tcap0"],"partial":false,"vfov":180,"label":trans('panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895.label'),"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895_t.jpg","class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","rowCount":2,"url":"media/panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895_0/0/{row}_{column}.jpg"},{"width":12288,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895_0/1/{row}_{column}.jpg"}]}}],"thumbnailUrl":"media/panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895_t.jpg","hfov":360,"id":"panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895","pitch":0,"data":{"label":"Millennium Cave 1"}},{"class":"Panorama","overlays":["this.panorama_069182CE_0C81_F53B_418C_4162605B64D5_tcap0"],"partial":false,"vfov":180,"label":trans('panorama_069182CE_0C81_F53B_418C_4162605B64D5.label'),"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_069182CE_0C81_F53B_418C_4162605B64D5_t.jpg","class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","rowCount":2,"url":"media/panorama_069182CE_0C81_F53B_418C_4162605B64D5_0/0/{row}_{column}.jpg"},{"width":12288,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_069182CE_0C81_F53B_418C_4162605B64D5_0/1/{row}_{column}.jpg"}]}}],"thumbnailUrl":"media/panorama_069182CE_0C81_F53B_418C_4162605B64D5_t.jpg","hfov":360,"id":"panorama_069182CE_0C81_F53B_418C_4162605B64D5","pitch":0,"data":{"label":"Millennium Cave 4"}},{"initialPosition":{"yaw":-16,"class":"PanoramaCameraPosition","pitch":-5.7},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65_camera","initialSequence":{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false}},{"initialPosition":{"yaw":170.67,"class":"PanoramaCameraPosition","pitch":1.52},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895_camera","initialSequence":{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false}},{"initialPosition":{"yaw":10.29,"class":"PanoramaCameraPosition","pitch":-1.51},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6_camera","initialSequence":{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false}},{"class":"Panorama","overlays":["this.panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65_tcap0"],"partial":false,"vfov":180,"label":trans('panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65.label'),"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65_t.jpg","class":"CubicPanoramaFrame","stereoCube":{"class":"ImageResource","levels":[{"width":24576,"colCount":24,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","rowCount":2,"url":"media/panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65_0/0/{row}_{column}.jpg"},{"width":12288,"colCount":12,"class":"TiledImageResourceLevel","height":1024,"tags":["ondemand","preload"],"rowCount":1,"url":"media/panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65_0/1/{row}_{column}.jpg"}]}}],"thumbnailUrl":"media/panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65_t.jpg","hfov":360,"id":"panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65","pitch":0,"data":{"label":"Millennium Cave 3"}},{"paddingLeft":0,"backgroundOpacity":0,"cursor":"hand","paddingRight":0,"class":"IconButton","propagateClick":false,"transparencyActive":false,"toolTipHorizontalAlign":"center","width":75,"maxHeight":75,"maxWidth":75,"iconURL":"skin/IconButton_02BB7201_1482_5529_4195_94523B94CFC2.png","paddingTop":0,"minHeight":75,"id":"IconButton_02BB7201_1482_5529_4195_94523B94CFC2","paddingBottom":0,"minWidth":75,"shadow":false,"borderSize":0,"mode":"push","verticalAlign":"bottom","horizontalAlign":"right","height":75,"data":{"name":"IconButton9346"},"borderRadius":0},{"fontWeight":"normal","horizontalAlign":"center","height":"6.602%","paddingLeft":0,"textDecoration":"none","backgroundColorRatios":[0.18],"fontSize":"20px","backgroundOpacity":1,"paddingRight":0,"fontFamily":"Arial","class":"Label","fontStyle":"normal","propagateClick":false,"toolTipHorizontalAlign":"center","width":"49.06%","fontColor":"#000000","backgroundColor":["#FFFFFF"],"paddingTop":0,"backgroundColorDirection":"vertical","minHeight":1,"id":"Label_017A3ED1_0C81_ED29_41A3_A9E6A945E5C8","paddingBottom":0,"minWidth":1,"shadow":false,"borderSize":0,"left":"0%","verticalAlign":"middle","top":"0%","text":trans('Label_017A3ED1_0C81_ED29_41A3_A9E6A945E5C8.text'),"data":{"name":"Label3248"},"borderRadius":0},{"initialPosition":{"yaw":-69.7,"class":"PanoramaCameraPosition","pitch":-1.13},"hoverFactor":0,"automaticZoomSpeed":10,"class":"PanoramaCamera","id":"panorama_069182CE_0C81_F53B_418C_4162605B64D5_camera","initialSequence":{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"linear","yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false}},{"id":"mainPlayList","items":[{"media":"this.panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895","camera":"this.panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6","camera":"this.panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65","camera":"this.panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"media":"this.panorama_069182CE_0C81_F53B_418C_4162605B64D5","camera":"this.panorama_069182CE_0C81_F53B_418C_4162605B64D5_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')"}],"class":"PlayList"},{"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"buttonCardboardView":"this.IconButton_02BB7201_1482_5529_4195_94523B94CFC2","arrowKeysAction":"translate","aaEnabled":true,"surfaceSelectionEnabled":false,"class":"PanoramaPlayer","mouseControlMode":"drag_acceleration","id":"MainViewerPanoramaPlayer","zoomEnabled":true},{"paddingLeft":20,"scrollBarWidth":10,"scrollBarMargin":2,"backgroundColorRatios":[0],"itemBackgroundColorRatios":[],"backgroundOpacity":1,"paddingRight":20,"itemHorizontalAlign":"center","itemThumbnailShadowOpacity":0.8,"itemThumbnailShadowHorizontalLength":3,"itemLabelFontColor":"#000000","class":"ThumbnailList","itemThumbnailShadowBlurRadius":4,"propagateClick":false,"itemLabelHorizontalAlign":"center","itemLabelPosition":"bottom","itemLabelTextDecoration":"none","itemPaddingLeft":3,"layout":"horizontal","toolTipHorizontalAlign":"center","maxHeight":600,"itemThumbnailOpacity":1,"maxWidth":800,"backgroundColor":["#FFFFFF"],"paddingTop":10,"backgroundColorDirection":"vertical","gap":10,"itemThumbnailScaleMode":"fit_outside","itemLabelFontWeight":"normal","paddingBottom":10,"minWidth":0,"itemLabelFontSize":14,"minHeight":0,"itemThumbnailShadowVerticalLength":3,"verticalAlign":"top","selectedItemBackgroundColor":["#0099FF"],"itemBackgroundOpacity":0,"horizontalAlign":"left","itemBackgroundColorDirection":"vertical","itemMode":"normal","borderRadius":5,"itemPaddingBottom":3,"selectedItemLabelFontWeight":"bold","rollOverItemLabelFontColor":"#0000FF","itemLabelGap":5,"itemThumbnailShadowColor":"#000000","itemLabelFontStyle":"normal","scrollBarOpacity":0.5,"itemOpacity":1,"itemLabelFontFamily":"Arial","itemPaddingRight":3,"selectedItemLabelFontColor":"#0000FF","scrollBarVisible":"rollOver","itemThumbnailHeight":75,"playList":"this.ThumbnailList_2F205483_2390_C1CE_419F_862CA3C44408_playlist","itemPaddingTop":3,"scrollBarColor":"#FFFFFF","itemThumbnailWidth":100,"selectedItemBackgroundColorRatios":[0.24],"shadow":false,"id":"ThumbnailList_2F205483_2390_C1CE_419F_862CA3C44408","itemBackgroundColor":[],"borderSize":0,"itemVerticalAlign":"middle","itemThumbnailBorderRadius":5,"selectedItemBackgroundOpacity":0.6,"itemThumbnailShadowSpread":1,"itemThumbnailShadow":true,"data":{"name":"ThumbnailList501"},"itemBorderRadius":0},{"id":"ThumbnailList_2F205483_2390_C1CE_419F_862CA3C44408_playlist","items":[{"media":"this.panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895_camera","class":"PanoramaPlayListItem"},{"media":"this.panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6_camera","class":"PanoramaPlayListItem"},{"media":"this.panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65_camera","class":"PanoramaPlayListItem"},{"media":"this.panorama_069182CE_0C81_F53B_418C_4162605B64D5","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_069182CE_0C81_F53B_418C_4162605B64D5_camera","class":"PanoramaPlayListItem"}],"class":"PlayList"},{"progressBarBackgroundColorDirection":"vertical","progressBorderRadius":0,"data":{"name":"Main Viewer"},"paddingLeft":0,"playbackBarProgressOpacity":1,"subtitlesTop":0,"playbackBarBottom":5,"progressLeft":0,"toolTipOpacity":1,"paddingRight":0,"transitionDuration":500,"height":"100%","progressBarBorderColor":"#000000","toolTipDisplayTime":600,"progressBackgroundColorDirection":"vertical","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"class":"ViewerArea","playbackBarProgressBackgroundColorDirection":"vertical","propagateClick":false,"toolTipFontWeight":"normal","toolTipTextShadowColor":"#000000","subtitlesFontWeight":"normal","toolTipBorderSize":1,"subtitlesPaddingTop":5,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipHorizontalAlign":"center","displayTooltipInSurfaceSelection":true,"subtitlesShadow":false,"progressBackgroundOpacity":1,"playbackBarHeight":10,"toolTipPaddingRight":6,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipPaddingTop":4,"toolTipShadowSpread":0,"minHeight":50,"paddingTop":0,"subtitlesTextShadowVerticalLength":1,"paddingBottom":0,"minWidth":100,"playbackBarBorderSize":0,"toolTipShadowOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"subtitlesOpacity":1,"progressBorderColor":"#000000","playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarRight":0,"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderRadius":0,"progressBarOpacity":1,"subtitlesGap":0,"playbackBarHeadShadowBlurRadius":3,"progressBottom":0,"subtitlesBackgroundColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"borderRadius":0,"playbackBarLeft":0,"playbackBarHeadHeight":15,"toolTipShadowColor":"#333333","toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","toolTipTextShadowOpacity":0,"toolTipTextShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"progressBorderSize":0,"subtitlesFontSize":"3vmin","toolTipFontSize":"1.11vh","subtitlesPaddingBottom":5,"playbackBarHeadShadowVerticalLength":0,"subtitlesPaddingLeft":5,"subtitlesVerticalAlign":"bottom","transitionMode":"blending","toolTipFontStyle":"normal","progressHeight":10,"toolTipFontColor":"#606060","progressBarBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesHorizontalAlign":"center","subtitlesPaddingRight":5,"subtitlesBorderSize":0,"subtitlesBottom":50,"progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","subtitlesEnabled":true,"doubleClickAction":"toggle_fullscreen","toolTipShadowBlurRadius":3,"displayTooltipInTouchScreens":true,"subtitlesBorderColor":"#FFFFFF","translationTransitionDuration":1000,"progressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"playbackBarHeadShadow":true,"subtitlesTextDecoration":"none","playbackBarHeadBorderSize":0,"progressRight":0,"playbackBarHeadOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextShadowBlurRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"toolTipShadowHorizontalLength":0,"id":"MainViewer","width":"100%","shadow":false,"toolTipFontFamily":"Arial","surfaceReticleOpacity":0.6,"toolTipBorderRadius":3,"toolTipPaddingLeft":6,"borderSize":0,"playbackBarOpacity":1,"playbackBarProgressBorderColor":"#000000","progressOpacity":1,"surfaceReticleColor":"#FFFFFF","playbackBarBorderRadius":0,"subtitlesFontFamily":"Arial","vrPointerSelectionTime":2000,"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowVerticalLength":0,"surfaceReticleSelectionOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderRadius":0,"firstTransitionDuration":0,"vrPointerColor":"#FFFFFF"},{"distance":50,"class":"TripodCapPanoramaOverlay","useHandCursor":false,"angle":0,"inertia":false,"hfov":37.5,"image":"this.res_2C2DBB8A_2397_C7DE_41C0_B240F8F2BE9D","rotate":false,"id":"panorama_0569C7D0_0C8E_5B27_41A5_FF2568038FE6_tcap0"},{"distance":50,"class":"TripodCapPanoramaOverlay","useHandCursor":false,"angle":0,"inertia":false,"hfov":37.5,"image":"this.res_2C2DBB8A_2397_C7DE_41C0_B240F8F2BE9D","rotate":false,"id":"panorama_06E8B3A5_0C8E_FB43_41A1_CC8D44D5E895_tcap0"},{"distance":50,"class":"TripodCapPanoramaOverlay","useHandCursor":false,"angle":0,"inertia":false,"hfov":37.5,"image":"this.res_2C2DBB8A_2397_C7DE_41C0_B240F8F2BE9D","rotate":false,"id":"panorama_069182CE_0C81_F53B_418C_4162605B64D5_tcap0"},{"distance":50,"class":"TripodCapPanoramaOverlay","useHandCursor":false,"angle":0,"inertia":false,"hfov":37.5,"image":"this.res_2C2DBB8A_2397_C7DE_41C0_B240F8F2BE9D","rotate":false,"id":"panorama_056E9D7F_0C8E_2FD9_4177_9DA3E4E40C65_tcap0"},{"id":"res_2C2DBB8A_2397_C7DE_41C0_B240F8F2BE9D","class":"ImageResource","levels":[{"url":"media/res_2C2DBB8A_2397_C7DE_41C0_B240F8F2BE9D_0.png","class":"ImageResourceLevel","height":850,"width":850}]}],"propagateClick":false,"mediaActivationMode":"window","scrollBarOpacity":0.5,"defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer","this.Container_2F20F481_2390_C1CA_41AC_75CF5FD50C9F","this.Label_017A3ED1_0C81_ED29_41A3_A9E6A945E5C8"],"backgroundPreloadEnabled":true,"toolTipHorizontalAlign":"center","scrollBarVisible":"rollOver","width":"100%","backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","layout":"absolute","paddingTop":0,"backgroundColorDirection":"vertical","overflow":"hidden","gap":10,"minHeight":20,"id":"rootPlayer","paddingBottom":0,"minWidth":20,"shadow":false,"borderSize":0,"defaultVRPointer":"laser","downloadEnabled":false,"verticalAlign":"top","vrPolyfillScale":1,"scripts":{"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showWindow":TDV.Tour.Script.showWindow,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaByName":TDV.Tour.Script.getMediaByName,"getKey":TDV.Tour.Script.getKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"getOverlays":TDV.Tour.Script.getOverlays,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initQuiz":TDV.Tour.Script.initQuiz,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"openLink":TDV.Tour.Script.openLink,"cloneCamera":TDV.Tour.Script.cloneCamera,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"init":TDV.Tour.Script.init,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"existsKey":TDV.Tour.Script.existsKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"getComponentByName":TDV.Tour.Script.getComponentByName,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"executeJS":TDV.Tour.Script.executeJS,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizShowScore":TDV.Tour.Script.quizShowScore,"historyGoForward":TDV.Tour.Script.historyGoForward,"mixObject":TDV.Tour.Script.mixObject,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setValue":TDV.Tour.Script.setValue,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"playAudioList":TDV.Tour.Script.playAudioList,"isPanorama":TDV.Tour.Script.isPanorama,"quizStart":TDV.Tour.Script.quizStart,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getPixels":TDV.Tour.Script.getPixels,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMainViewer":TDV.Tour.Script.getMainViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"shareSocial":TDV.Tour.Script.shareSocial,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"cloneBindings":TDV.Tour.Script.cloneBindings,"downloadFile":TDV.Tour.Script.downloadFile,"quizFinish":TDV.Tour.Script.quizFinish,"clone":TDV.Tour.Script.clone,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"translate":TDV.Tour.Script.translate,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList},"horizontalAlign":"left","height":"100%","start":"this.init(); this.initAnalytics(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_2F205483_2390_C1CE_419F_862CA3C44408_playlist])","mobileMipmappingEnabled":false,"borderRadius":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.23.js.map
})();
//Generated with v2022.1.23, Fri Sep 9 2022